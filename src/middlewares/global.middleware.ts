import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

interface CustomRequest extends Request {
  userId?: string;
}

export async function validId(
  req: CustomRequest,
  res: Response,
  next: NextFunction,
) {
  const idParam = req.params.id ? req.params.id : req.userId;

  if (!idParam) {
    return res.status(400).send({ message: "ID Inválido!" });
  }

  const isInvalidId = !mongoose.Types.ObjectId.isValid(idParam);

  if (isInvalidId) {
    return res.status(400).send({ message: "ID Inválido!" });
  }
  next();
}
