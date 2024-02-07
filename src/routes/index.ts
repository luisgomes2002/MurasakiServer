import { Router } from "express";
import userRouter from "./user.route";

const router = Router();

router.use("/user", userRouter);
// router.use("/posts", postRouter);
// router.use("/auth", authRouter);
// router.use("/doc", swaggerRouter);

export default router;
