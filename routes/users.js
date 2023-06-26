const { getUserByUsername, getAllUsers } = require("../db/adapters/users");

const express = require("express");
//verify token

const userRouter = express.Router();

//GET /api/users/test
userRouter.get("/test", (req, res, next) => {
  res.send("USERS COMING SOON!");
});

//GET /api/users/
userRouter.get("/", async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.send(users);
  } catch (error) {
    next(error);
  }
});

module.exports = userRouter;
