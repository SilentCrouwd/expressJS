import { Router } from "express";
import {
  delUser,
  getUserById,
  getUserCommentsById,
  postUser,
  putUser,
  updateUserById,
} from "./user.service.js";

const userRouter = Router();

userRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  try {
    res.status(200).json({ user: getUserById(Number(id)) });
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
});

userRouter.get("/:id/comments", (req, res) => {
  const id = req.params.id;
  const skip = req.query.skip ? Number(req.query.skip) : 0;

  const take = req.query.take ? Number(req.query.take) : 20;
  try {
    res.status(200).json(getUserCommentsById(Number(id), skip, take));
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
});

userRouter.post("/", (req, res) => {
  const name = req.body.name;

  try {
    const newUser = postUser(name);

    res.header("Location", `/api/user/${newUser.id}`);
    res.status(201).json({ user: newUser });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});
userRouter.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  try {
    res.status(204).json({});
    delUser(id);
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
});
userRouter.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const name = req.body.name;
  // console.log(name);
  const age = req.body.age;
  // console.log(age);
  try {
    const newUser = putUser(id, { name, age });
    res.status(202).json({ UpdatedUser: newUser });
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
});
userRouter.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  const name = req.body.name;
  // console.log(name);
  const age = req.body.age;
  // console.log(age);
  try {
    const newUser = updateUserById(id, { name, age });
    res.status(202).json({ UpdatedUser: newUser });
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
});
export default userRouter;
