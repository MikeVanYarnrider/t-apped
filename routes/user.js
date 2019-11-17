const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/User");

// user GET dashboard
router.get("/user/:id", (req, res, next) => {
  console.log(req.params.id);
  User.findById(req.params.id);
  res.render("/user/dashboard.hbs");
});

module.exports = router;
