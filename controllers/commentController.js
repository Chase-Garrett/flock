const { User, Comment, Post } = require("../models");

module.exports = {
  // create a comment
  async createComment(req, res) {
    try {
      const comment = await Comment.create({
        commentText: req.params.body.commentText,
        user: req.params.userId,
        post: req.params.postId
      });

      const updatedUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $push: { comments: comment._id } },
        { new: true, runValidators: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ message: "No user with this id!" });
      }

      const updatedPost = await Post.findOneAndUpdate(
        { _id: req.params.postId },
        { $push: { comments: comment._id } },
        { new: true, runValidators: true }
      );

      if (!updatedPost) {
        return res.status(404).json({ message: "No post with this id!" });
      }

      return res.json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // delete a comment
  async deleteComment(req, res) {
    try {
      const comment = await Comment.findOneAndDelete({
        _id: req.params.commentId
      });

      if (!comment) {
        return res.status(404).json({ message: "No comment with this id!" });
      }

      const updatedUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { comments: comment._id } },
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ message: "No user with this id!" });
      }

      const updatedPost = await Post.findOneAndUpdate(
        { _id: req.params.postId },
        { $pull: { comments: comment._id } },
        { new: true }
      );

      if (!updatedPost) {
        return res.status(404).json({ message: "No post with this id!" });
      }

      return res.json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};
