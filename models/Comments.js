const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  userName: String,
  userRating: Number,
  content: String,
  date: String,
  wellId: String
});

const Comments = mongoose.model("Comments", commentSchema);
module.exports = Comments;
