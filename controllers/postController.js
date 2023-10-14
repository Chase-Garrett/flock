const { User, Post } = require("../models");

module.exports = {
  // get all posts
  async getPosts(req, res) {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // create a new post
  async createPost(req, res) {
    try {
      const post = await Post.create({
        postText: req.body.postText,
        user: req.params.userId
      });
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $push: { posts: post._id } },
        { new: true, runValidators: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ message: "No user with this id!" });
      }

      res.json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};
