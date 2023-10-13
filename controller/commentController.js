const { User, Comment } = require("../../models");

module.exports = {
  // create a comment
  async createComment(req, res) {
    try {
      const comment = await Comment.create(req.params.body);
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $push: { comments: comment._id } },
        { new: true, runValidators: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: "No user with this id!" });
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
      return res.json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};
