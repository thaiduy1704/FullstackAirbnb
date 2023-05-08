import express from "express";
import { locationRouter } from "./v1/locationRouter.js";
import { roomRouter } from "./v1/roomRouter.js";
import { userRouter } from "./v1/userRouter.js";
import { authRouter } from "./v1/authRouter.js";

const rootRouter = express.Router();

rootRouter.use("/location", locationRouter);
rootRouter.use("/room", roomRouter);
rootRouter.use("/user", userRouter);
roomRouter.use("/auth", authRouter);

export { rootRouter };
