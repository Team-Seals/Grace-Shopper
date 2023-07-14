const { getUserByUsername, getAllUsers } = require("../db/adapters/users");
const { verifyToken } = require("../routes/utility");

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

//GET /api/users/me
userRouter.get("/me", verifyToken, async (req, res, next) => {
  try {
    const { username } = req.user;
    const user = await getUserByUsername(username);
    if (!user) {
      throw {
        name: "NotFoundError",
        message: "User not found.",
      };
    }
    delete user.password;
    res.json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = userRouter;
