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
      ref: "user"
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
    },
    id: false
  }
);

commentSchema.virtual("username").get(function () {
  return this.user.username;
});

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
    user: {
      type: Schema.Types.ObjectId,
      ref: "user"
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal)
    },
    comments: [commentSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

// get username of user who created the post
postSchema.virtual("username").get(function () {
  return this.user.username;
});

// get total count of comments on retrieval
postSchema.virtual("commentCount").get(function () {
  return this.comments.length;
});

// Initialize our Post model
const Post = model("Post", postSchema);

module.exports = Post;
