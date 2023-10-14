const router = require("express").Router();
const {
  createComment,
  deleteComment
} = require("../../controllers/commentController");

// /api/comments/create/:userId/:postId
router.route("/create/:userId/:commentId").post(createComment);

// /api/comments/delete/:userId/:commentId
router.route("/delete/:userId/:commentId").delete(deleteComment);

module.exports = router;
