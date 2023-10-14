const { Schema, model } = require("mongoose");

// Schema to create User model
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  // email of user
  email: {
    type: String,
    unique: true,
    required: true,
    // match a valid email address
    match: [/.+@.+\..+/, "Must match an email address!"]
  },
  // Array of _id values referencing the post model
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post"
    }
  ],
  // Array of _id values referencing the comment model
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ],
  // Array of _id values referencing the user model (self-reference)
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

// Initialize our User model
const User = model("user", userSchema);

module.exports = User;
