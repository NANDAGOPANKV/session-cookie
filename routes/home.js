var express = require("express");
var router = express.Router();

// const { preUser, condition } = require("./index");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("home");
});

module.exports = router;
