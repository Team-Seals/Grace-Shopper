const jwt = require("jsonwebtoken");

const authRequired = (req, res, next) => {
  try {
    const token = req.signedCookies.token;
    console.log("Token", token);
    jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    res.status(401).send({
      loggedIn: false,
      message: "You are not authorized!",
    });
    return;
  }
  next(error);
};

const verifyToken = (req, res, next) => {
  try {
    const token = req.signedCookies.token;
    if (!token) {
      throw new Error("No token found.");
    }
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    res.status(401).json({
      loggedIn: false,
      message: "You ain't authorized, fool!!",
    });
  }
};

module.exports = { authRequired, verifyToken };
