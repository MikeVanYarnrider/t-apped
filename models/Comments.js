const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  userRating: Number,
  content: String,
  date: Date
});

const Comments = mongoose.model("Comments", commentSchema);
module.exports = Comments;
