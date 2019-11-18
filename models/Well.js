const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wellSchema = new Schema({
  name: String,
  address: String,
  type: String,
  coordinates: Object, //{lat:000, lng:000}
  availability: {
    type: String,
    enum: ["open", "not available", "closed"],
    default: "open"
  },
  accessability: {
    type: Boolean,
    default: true
  },
  noteworthy: {
    type: Boolean,
    default: false
  },
  inOperation: Object, //{from:, to:, always: Bool}
  ratings: [Number],
  imageUrls: [String],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

const Well = mongoose.model("Well", wellSchema);
module.exports = Well;
