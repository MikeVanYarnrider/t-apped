const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/User");
const Well = require("../models/Well");
const Comments = require("../models/Comments");

const loginCheck = () => {
  return (req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.redirect("/auth/login");
    }
  };
};

router.get("/:id", loginCheck(), (req, res, next) => {
  if (req.user.role === "admin" || req.user.role === "regular") {
    Well.findById({ _id: req.params.id })
      .populate({
        path: "comments",
        populate: {
          path: "userId"
        }
      })
      .then(wellData => {
        if (!wellData.imageUrls.length) {
          wellData.imageUrls = "../images/DrinkingFountain_Default.jpg";
        }
        /*  if(!wellData.ratings.length){
          wellData.ratings = 3
        } */

        if (wellData.ratings.length) {
          averageRating =
            wellData.ratings.reduce((acc, val) => acc + val, 0) /
            wellData.ratings.length;
          wellData.averageRating = averageRating.toFixed(1);
        } else {
          wellData.ratings = 3;
          wellData.averageRating = 3;
        }

        let wellSummary = "";
        if (wellData.averageRating >= 4) {
          wellSummary = "This Drinking-Fountain is awesome and very popular! ";
        } else if (wellData.averageRating === 3) {
          wellSummary = "This Drinking-Fountain is great. ";
        } else {
          wellSummary = "This Drinking-Fountain needs improvement! ";
        }

        let wellAccessInfo = "";
        if (wellData.accessability !== "off") {
          if (wellData.averageRating >= 4) {
            wellAccessInfo = "It is accessable to people with disabilities. ";
          } else if (wellData.averageRating === 3) {
            wellAccessInfo = "It is accessable to people with disabilities. ";
          } else {
            wellAccessInfo =
              "But it is accessable to people with disabilities. ";
          }
        }

        let wellAttractionInfo = "";
        if (wellData.noteworthy !== "off") {
          if (wellAccessInfo) {
            wellAttractionInfo =
              "It's also designed by an artist. So check it out!";
          } else {
            if (wellData.averageRating >= 4) {
              wellAttractionInfo =
                "It's also designed by an artist. So check it out!";
            } else if (wellData.averageRating === 3) {
              wellAttractionInfo =
                "It is designed by an artist. So check it out!";
            } else {
              wellAttractionInfo =
                "But it is designed by an artist. So check it out!";
            }
          }
        }

        let commentStatus = "";
        if (!wellData.comments.length) {
          commentStatus =
            "No comments yet! Be the first one to leave a comment for this Drinking-Fountain!";
        }

        console.log("user", req.user);
        console.log(wellAttractionInfo);
        console.log("status:", commentStatus);
        res.render("wellInfo.hbs", {
          wellInfo: wellData,
          wellSummary,
          wellAccessInfo,
          wellAttractionInfo,
          commentStatus,
          loggedinUser: req.user
        });
      })
      .catch(err => {
        next(err);
      });
  } else {
    res.redirect("/auth/login");
  }
});

router.post("/:wellId/comment", loginCheck(), (req, res, next) => {
  const content = req.body.content;
  const userId = req.user._id;
  const userName = req.user.username;
  const timeDate = req.body.time;
  const userRating = req.body.rating;
  
  Comments.create({
    userId: userId,
    content: content,
    userName: userName,
    userRating: userRating,
    date: timeDate
  })
    .then(comment => {
      console.log(comment)
      return Well.findOneAndUpdate(
        { _id: req.params.wellId },
        {
          $push: {
            comments: comment._id
          }
        },
        {
          new: true
        }
      )
        .populate({
          path: "comments",
          populate: {
            path: "userId"
          }
        })
        .then(well => {
          res.json(well.comments);
        });
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
