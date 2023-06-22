const express = require("express");
//verify token

const userRouter = express.Router();

//GET /api/users/test
userRouter.get("/test", (req, res, next) => {
  res.send("USERS COMING SOON!");
});
