const express = require("express");
const router = express.Router();

const loginCheck = () => {
  return (req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.redirect("/");
    }
  };
};

// GET user dashboard
router.get("/", loginCheck(), (req, res, next) => {
  if (req.user.role !== "admin") {
    console.log(req.user);
    res.render("user/dashboard.hbs", { user: req.user });
  }
});

module.exports = router;
