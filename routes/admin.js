const express = require("express");
const router = express.Router();
const Well = require("../models/Well");

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
  if (req.user.role === "admin") {
    Well.find({ availability: "not available" })
      .then(wells => res.render("admin/errorDashboard.hbs", { wells }))
      .catch(err => {
        console.log(err);
      });
  }
});

module.exports = router;
