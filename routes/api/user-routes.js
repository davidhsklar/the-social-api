const router = require("express").Router();

const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  newFriend,
  deleteFriend,
  getAllUsers,
} = require("../../controllers/user-controller");

// Route: /api/users
router.route("/").get(getAllUsers).post(createUser);

// Route: /api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// Route: /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(newFriend).delete(deleteFriend);

module.exports = router;
