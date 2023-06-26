const authRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;
const { createUser, getUserByUsername } = require("../db/adapters/users");

//POST /api/auth/register
authRouter.post("/register", async (req, res, next) => {
  try {
    const { username, password } = req.body;

    //check if user already exist
    const _user = await getUserByUsername(username);
    if (_user) {
      next({
        message: "That user already exist",
        name: "Auth Error",
      });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await createUser({ username, password: hashedPassword });
    // delete user.password;

    const token = jwt.sign(user, process.env.JWT_SECRET);

    res.send(user, token);
  } catch (error) {
    next(error);
  }
});

authRouter.post("/login", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

authRouter.get("/logout", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

module.exports = authRouter;
