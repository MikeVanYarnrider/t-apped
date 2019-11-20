const express = require("express");
const router = express.Router();
const Well = require("../models/Well");
const User = require("../models/User");


const loginCheck = () => {
  return (req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.redirect("/");
    }
  };
};

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index.hbs");
});

/* GET create well page */

router.get("/create", loginCheck(), (req, res, next) => {
  if (req.user.role === "admin" || req.user.role === "regular") {
    res.render("create.hbs");
  }
});

router.post("/create", (req, res, next) => {
  let { lat, lng } = req.body;
  lat = Number(lat);
  lng = Number(lng);

  const {
    name,
    address,
    availability,
    accessability,
    noteworthy,
    inOperation
  } = req.body;

  Well.create({
    name,
    address,
    coordinates: { lat, lng },
    availability,
    accessability,
    noteworthy,
    inOperation
  })
    .then(newWell => {
      console.log(req.body);
      console.log(newWell);
      res.render("create.hbs", { message: "Successfully created" });
    })
    .catch(err => {
      console.log(err);
      res.render("create.hbs", { message: "Something went wrong" });
    });
});

router.post("/admin/:id/resolve", (req, res, next) => {
  const { id } = req.params;
  Well.findByIdAndUpdate({ _id: id }, { availability: "open" })
    .then(well => {
      console.log(well);
      res.redirect("/admin");
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/data", (req, res, next) => {
  Well.find({ availability: { $not: { $eq: "not available" } } })
    .then(wells => {
      res.json(wells);
    })
    .catch(err => {
      // next(err);
      console.log(err);
    });
});

router.get("/wells", (req, res, next) => {
  Well.find()
    .then(wells => {
      res.json(wells);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
