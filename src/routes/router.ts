import { Router } from "express";
import userRouter from "./users/user.controller.js";
import commentsRouter from "./comments/comments.controller.js";

const router = Router();

router.use("/user", userRouter);
router.use("/comments", commentsRouter);

export default router;
