const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const token = req.signedCookies.token;
    if (!token) {
      throw new Error("no token found.");
    }
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    res.status(401).json({
      loggedIn: false,
      message: "You are not authorized!",
    });
  }
};

module.exports = {
  verifyToken,
};
