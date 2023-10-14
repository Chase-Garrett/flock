const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

// Schema to create Comment model
const commentSchema = new Schema(
  {
    commentText: {
      type: String,
      required: true,
      validate: [
        ({ length }) => length <= 280,
        "Comment must be less than 280 characters."
      ]
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal)
    }
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    }
  }
);

commentSchema.virtual("user.username").get(function () {
  return this.user.username;
});

// Initialize our Comment model
const Comment = model("Comment", commentSchema);

module.exports = Comment;
