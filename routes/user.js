const express = require("express");
const router = express.Router();

// GET user dashboard
router.get("/", (req, res, next) => {
  res.render("user/dashboard.hbs");
});

module.exports = router;
