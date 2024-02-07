import "dotenv/config";
import jwt, { JwtPayload } from "jsonwebtoken";
import userRepositories from "../repositories/user.repositories.js";
import { Request, Response, NextFunction } from "express";

interface CustomRequest extends Request {
  userId?: string;
}

const authMiddleware = (
  req: CustomRequest,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).send({ message: "O token não foi informado!" });

  const parts = authHeader.split(" ");
  if (parts.length !== 2)
    return res.status(401).send({ message: "Token inválido!" });

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme))
    return res.status(401).send({ message: "Token malformatado!" });

  if (!process.env.SECRET_JWT)
    throw new Error("Secret key not provided in environment variables");

  jwt.verify(
    token,
    process.env.SECRET_JWT,
    async (err, decoded: string | JwtPayload | undefined) => {
      if (err || !decoded)
        return res.status(401).send({ message: "Token inválido!" });

      const userId = typeof decoded === "string" ? decoded : decoded.id;
      if (!userId) return res.status(401).send({ message: "Token inválido!" });

      const user = await userRepositories.findByIdUserRepository(userId);
      if (!user || !user.id)
        return res.status(401).send({ message: "Token inválido!" });

      req.userId = user.id;

      return next();
    },
  );
};

export default authMiddleware;
