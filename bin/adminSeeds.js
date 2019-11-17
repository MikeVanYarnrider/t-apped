// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Admin = require("../models/Admin");

const bcryptSalt = 10;

mongoose
  .connect("mongodb://localhost/p2-waterwell", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

let admins = [
  {
    username: "root",
    password: bcrypt.hashSync("root", bcrypt.genSaltSync(bcryptSalt))
  }
];

Admin.deleteMany()
  .then(() => {
    return Admin.create(admins);
  })
  .then(adminsCreated => {
    console.log(
      `${adminsCreated.length} admins created with the following id:`
    );
    console.log(adminsCreated.map(a => a._id));
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect();
  })
  .catch(err => {
    mongoose.disconnect();
    throw err;
  });
