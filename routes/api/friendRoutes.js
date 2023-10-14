const router = require("express").Router();
const { addFriend, removeFriend } = require("../../controllers/userController");

// /api/friends/add
router.route("/add").post(addFriend);

// /api/friends/remove
router.route("/remove").delete(removeFriend);

module.exports = router;
