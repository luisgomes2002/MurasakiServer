import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDatabase from "./database/database";
import router from "./routes/index";
import UserModel from "./models/User";

export * from "colors";

dotenv.config();
const app = express();

connectDatabase();
app.use(cors());
app.use(express.json());
app.use(router);

app.get("/", async (req: Request, res: Response) => {
  const users = await UserModel.find();
  return res.json(users);
});

export default app;
