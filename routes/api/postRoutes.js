const router = require("express").Router();
const { getPosts, createPost } = require("../../controllers/postController");

// /api/posts
router.route("/").get(getPosts);

// /api/posts/create/:userId
router.route("/create/:userId").post(createPost);

module.exports = router;
