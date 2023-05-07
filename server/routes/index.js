import express from "express";
import { locationRouter } from "./v1/locationRouter.js";
import { roomRouter } from "./v1/roomRouter.js";

const rootRouter = express.Router();

rootRouter.use("/location", locationRouter);
rootRouter.use("/room", roomRouter);

export { rootRouter };
