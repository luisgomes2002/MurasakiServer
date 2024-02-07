import UserModel from "../models/User";

interface User {
  name: string;
  username: string;
  email: string;
  password: string;
  avatar: string;
  background: string;
}

const findByEmailUserRepository = (email: string) =>
  UserModel.findOne({ email: email });

const findByUsernameRepository = (username: string) =>
  UserModel.findOne({ username: username });

const createUserRepository = (body: User) => UserModel.create(body);

const findAllUserRepository = () => UserModel.find();

const findByIdUserRepository = (idUser: string) => UserModel.findById(idUser);

export default {
  findByEmailUserRepository,
  findByUsernameRepository,
  createUserRepository,
  findAllUserRepository,
  findByIdUserRepository,
};
