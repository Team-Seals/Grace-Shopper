const authRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;
const { JWT_SECRET, COOKIE_SECRET } = process.env;
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
    delete user.password;

    const token = jwt.sign(user, process.env.JWT_SECRET);

    res.cookie("token", token, {
      sameSite: "strict",
      httpOnly: true,
      signed: true,
    });

    res.send(user);
  } catch (error) {
    next(error);
  }
});

//POST /api/auth/login
authRouter.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await getUserByUsername(username);
    if (!user) {
      next({
        name: "AuthenticationError",
        message: "Invalid username",
      });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      next({
        name: "AuthenticationError",
        message: "Invalid Password",
      });
      return;
    }

    delete user.password;
    const token = jwt.sign(user, JWT_SECRET);
    res.cookie("token", token, {
      sameSite: "strict",
      httpOnly: true,
      signed: true,
    });

    res.json({ message: "login successful", user });
  } catch (error) {
    next(error);
  }
});

authRouter.get("/logout", async (req, res, next) => {
  try {
    console.log("attempted logout");
    res.clearCookie("token", {
      sameSite: "strict",
      httpOnly: true,
      signed: true,
    });
    res.send({
      loggedIn: false,
      message: "Logged out! Come again!",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = authRouter;
