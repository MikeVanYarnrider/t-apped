const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wellSchema = new Schema({
  name: String,
  type: String,
  coordinates: Object, //{lat:000, lng:000}
  availability: String, //"open", "not available", "closed"
  accessability: Boolean,
  noteworthy: Boolean,
  inOperation: Object //{from:, to:, always: Bool}
});

const Well = mongoose.model("Well", wellSchema);
module.exports = Well;
