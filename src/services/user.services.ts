import userRepositories from "../repositories/user.repositories";
import bcrypt from "bcrypt";
import authServices from "./auth.services";

const createUserService = async ({
  name,
  username,
  email,
  password,
  avatar,
  background,
}: {
  name: string;
  username: string;
  email: string;
  password: string;
  avatar: string;
  background: string;
}) => {
  if (!username || !name || !email || !password || !avatar || !background)
    throw new Error("Envie todos os campos para cadastro");

  const foundUser = await userRepositories.findByEmailUserRepository(email);

  if (foundUser) throw new Error("Usuário já existe");

  const user = await userRepositories.createUserRepository({
    name,
    username,
    email,
    password,
    avatar,
    background,
  });

  if (!user) throw new Error("Erro ao criar usuário");

  const token = authServices.generateToken(user.id);

  return token;
};

const findAllUserService = async () => {
  const users = await userRepositories.findAllUserRepository();

  if (users.length === 0) throw new Error("Não há usuários cadastrados");

  return users;
};

const findUserByUsernameService = async (username: string) => {
  const user = await userRepositories.findByUsernameRepository(username);
  return user;
};

export default {
  findAllUserService,
  createUserService,
  findUserByUsernameService,
};
