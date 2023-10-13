const { Schema, model } = require("mongoose");

// Schema to create Post model
const postSchema = new Schema(
  {
    postText: {
      type: String,
      required: true,
      validate: [
        ({ length }) => length <= 280,
        "Post must be less than 280 characters."
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
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment"
      }
    ]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

// Initialize our Post model
const Post = model("Post", postSchema);

module.exports = Post;
