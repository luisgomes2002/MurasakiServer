import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import "dotenv/config";
import userRepositories from "../repositories/user.repositories";

const generateToken = (id: string) => {
  if (!process.env.SECRET_JWT)
    throw new Error("Secret key not provided in environment variables");
  return jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 432000 });
};

const loginService = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const user = await userRepositories.findByEmailUserRepository(email);

  if (!user) throw new Error("Senha ou nome de usuário errados");

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) throw new Error("Senha ou nome de usuário errados");

  const token = generateToken(user.id);

  return token;
};

export default { loginService, generateToken };
