const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers);

// /api/users/create
router.route("/create").post(createUser);

// /api/users/update/:userId
router.route("/update/:userId").put(updateUser);

// /api/users/delete/:userId
router.route("/delete/:userId").delete(deleteUser);

// /api/users/:userId/friends/add/:friendId
router.route("/:userId/friends/add/:friendId").post(addFriend);

// /api/users/:userId/friends/remove/:friendId
router.route("/:userId/friends/remove/:friendId").delete(removeFriend);

// /api/users/:userId
router.route("/:userId").get(getSingleUser);

module.exports = router;
