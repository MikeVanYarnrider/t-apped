const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wellSchema = new Schema({
  name: String,
  type: String,
  coordinates: Object, //{lat:000, lng:000}
  availability: {
    type: String,
    enum: ["open", "not available", "closed"],
    default: "open"
  },
  accessability: Boolean,
  noteworthy: Boolean,
  inOperation: Object, //{from:, to:, always: Bool}
  ratings: [Number],
  imageUrls: [String]
  comments: [
    {
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }
]
});

const Well = mongoose.model("Well", wellSchema);
module.exports = Well;
