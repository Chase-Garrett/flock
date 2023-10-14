const { Schema, model } = require("mongoose");

// Schema to create User model
const userSchema = new Schema(
  {
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
        ref: "post"
      }
    ],
    // Array of _id values referencing the user model (self-reference)
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user"
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
);

// get total count of friends on retrieval
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// Initialize our User model
const User = model("user", userSchema);

module.exports = User;
