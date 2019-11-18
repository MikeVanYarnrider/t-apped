const express = require("express");
const router = express.Router();
const Well = require("../models/Well");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index.hbs");
});

/* GET create well page */

router.get("/create", (req, res, next) => {
  res.render("create.hbs");
});

router.post("/create", (req, res, next) => {
  const {
    name,
    address,
    availability,
    // accessability,
    // noteworthy,
    inOperation
  } = req.body;

  // if (accessability === "on") accessability === true;
  // else accessability === false;
  // console.log(accessability);
  // if (noteworthy === "on") noteworthy === true;
  // else noteworthy === false;
  //console.log(name, address);
  Well.create({
    name,
    address,
    availability,
    // accessability,
    // noteworthy,
    inOperation
  })
    .then(newWell => {
      console.log(newWell);
      res.render("create.hbs", { message: "Successfully created" });
    })
    .catch(err => {
      console.log(err);
      res.render("create.hbs", { message: "Something went wrong" });
    });
});

module.exports = router;
