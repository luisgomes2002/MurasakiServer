import { Request, Response } from "express";
import userServices from "../services/user.services";
import userRepositories from "../repositories/user.repositories";

interface CustomRequest extends Request {
  userId?: string;
}

const createUserController = async (req: Request, res: Response) => {
  const { name, username, email, password, avatar, background } = req.body;

  try {
    const token = await userServices.createUserService({
      name,
      username,
      email,
      password,
      avatar,
      background,
    });
    res.status(201).send(token);
  } catch (error: any) {
    return res.status(400).send(error.message);
  }
};

const findAllUserController = async (req: Request, res: Response) => {
  try {
    const users = await userServices.findAllUserService();
    return res.send(users);
  } catch (error: any) {
    return res.status(404).send(error.message);
  }
};

const findUserByUsernameController = async (req: Request, res: Response) => {
  try {
    const username = req.params.username;
    const user = await userServices.findUserByUsernameService(username);
    //user retornando a senha TIRAR!!!
    return res.send(user);
  } catch (error: any) {
    return res.status(400).send(error.message);
  }
};

const findUserByIdController = async (req: CustomRequest, res: Response) => {
  try {
    const user = await userServices.findUserByIdService(
      req.params.id,
      req.userId,
    );
    return res.send(user);
  } catch (error: any) {
    return res.status(400).send(error.message);
  }
};

const updateUserController = async (req: CustomRequest, res: Response) => {
  try {
    const { name, username, email, password, avatar, background } = req.body;
    const { id: userId } = req.params;
    const userIdLogged = req.userId;

    const response = await userServices.updateUserService(
      { name, username, email, password, avatar, background },
      userId,
      userIdLogged,
    );

    return res.send(response);
  } catch (error: any) {
    return res.status(400).send(error.message);
  }
};

const deleteUserByIdController = async (req: CustomRequest, res: Response) => {
  try {
    const { userAccountId } = req.body;
    const userIdLogged = req.userId;
    const response = await userServices.deleteUserByIdService(
      userAccountId,
      userIdLogged,
    );

    return res.send(response);
  } catch (error: any) {
    return res.status(400).send(error.message);
  }
};

const followUserController = async (req: CustomRequest, res: Response) => {
  const { username } = req.params;
  const userId = req.userId;
  const userIdName = await userServices.findUserByIdService(userId);

  try {
    const response = await userServices.followUserService(
      //User para seguir
      username,
      //User logado
      userId,
      userIdName.username,
    );
    return res.send(response);
  } catch (error: any) {
    return res.status(500).send(error.message);
  }
};

const totalPointsUserController = async (req: CustomRequest, res: Response) => {
  try {
    const { id: userId } = req.params;
    const userIdLogged = req.userId;

    const user = await userServices.totalPointsUserService(
      userId,
      userIdLogged,
    );
    return res.send(user);
  } catch (error: any) {
    return res.status(400).send(error.message);
  }
};

const userDeleteNotificarionController = async (
  req: Request,
  res: Response,
) => {
  const { userId, id } = req.params;

  try {
    const response = await userRepositories.userDeleteNotificarionService(
      userId,
      id,
    );
    return res.send(response);
  } catch (error: any) {
    return res.status(400).send(error.message);
  }
};

export default {
  createUserController,
  findAllUserController,
  findUserByUsernameController,
  findUserByIdController,
  updateUserController,
  deleteUserByIdController,
  followUserController,
  totalPointsUserController,
  userDeleteNotificarionController,
};
