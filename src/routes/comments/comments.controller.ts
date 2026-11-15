import {  Router } from "express";
import { getCommentsById } from "./comments.service.js";

const commentsRouter = Router();

commentsRouter.get("/:id", (req, res) => {
  const userId = Number(req.params.id);

  try {
    res.status(200).json({ comments: getCommentsById(userId) });
  } catch (Error: any) {
    res.status(404).json({ error: Error.message });
  }
});

export default commentsRouter;
