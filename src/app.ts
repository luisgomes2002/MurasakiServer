import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDatabase from "./database/database";
import router from "./routes/index";
export * from "colors";

const app = express();

connectDatabase();
app.use(cors());
app.use(express.json());
app.use(router);

export default app;
