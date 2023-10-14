const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers);

// /api/users/:userId
router.route("/:userId").get(getSingleUser);

// /api/users/create
router.route("/create").post(createUser);

// /api/users/update/:userId
router.route("/update/:userId").put(updateUser);

// /api/users/delete/:userId
router.route("/delete/:userId").delete(deleteUser);

module.exports = router;
