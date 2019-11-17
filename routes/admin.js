const express = require("express");
const router = express.Router();

// GET admin dashboard
router.get("/", (req, res, next) => {
  res.render("admin/errorDashboard.hbs");
});

module.exports = router;
