const router = require("express").Router();
const {
  createComment,
  deleteComment
} = require("../../controllers/commentController");

// /api/comments/create/:userId/:postId
router.route("/create/:userId/:postId").post(createComment);

// /api/comments/delete/:postId/:commentId
router.route("/delete/:postId/:commentId").delete(deleteComment);

module.exports = router;
