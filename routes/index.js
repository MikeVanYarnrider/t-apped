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
    availability,
    accessability,
    noteworthy,
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

router.post("/admin/:id/resolve", (req, res, next) => {
  const { id } = req.params;
  console.log("LOOOOOOOOK HERE   ", id);
  // console.log("LOOOOOOOOK HERE   ", availability);
  //collection.update(criteria, update[([, options], callback)]);
  Well.findByIdAndUpdate({ _id: id }, { availability: "open" })
    .then(well => {
      console.log(well);
      res.redirect("/admin");
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
