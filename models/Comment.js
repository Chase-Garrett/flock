const { Schema, model } = require("mongoose");

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
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // Use getter method to format timestamp
      get: (createdAtVal) => dateFormat(createdAtVal)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

// Initialize our Comment model
const Comment = model("Comment", commentSchema);

module.exports = Comment;
