const { Post } = require("../models");

module.exports = {
  // create a comment
  async createComment(req, res) {
    try {
      const post = await Post.findById(req.params.postId).populate("user");

      if (!post) {
        return res.status(404).json({ message: "No post with this id!" });
      }

      const newComment = {
        commentText: req.body.commentText,
        user: req.params.userId
      };

      await post.populate({ path: "comments.user", model: "user" });

      post.comments.push(newComment);
      await post.save();

      return res.json(post);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // delete a comment
  async deleteComment(req, res) {
    try {
      const post = await Post.findById(req.params.postId);

      if (!post) {
        return res.status(404).json({ message: "No post with this id!" });
      }

      const comment = post.comments.id(req.params.commentId);

      if (!comment) {
        return res.status(404).json({ message: "No comment with this id!" });
      }

      // remove comment from post
      post.comments.pull(comment);
      await post.save();

      return res.json(post);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};
