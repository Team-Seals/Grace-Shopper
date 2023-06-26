const router = require("express").Router();

//routers for adapters
router.use("/users", require("./users"));
router.use("/orders", require("./orders"));
router.use("/auth", require("./auth"));

// GET /api/health
router.get("/health", (req, res, next) => {
  res.send({
    message: "Api is up and healthy!",
  });
});

module.exports = router;
