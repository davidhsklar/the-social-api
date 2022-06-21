const { User } = require("../models");

const userController = {
  
    // Get all Users
  getAllUsers(req, res) {
    User.find({})
      .populate({
        path: ("thoughts", "friends"),
        select: "-__v",
      })
      .select("-__v")
      .sort({ _id: -1 })
      .then((allUsers) => res.json(allUsers))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // Get One User by id
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .populate({
        path: ("thoughts", "friends"),
        select: "-__v",
      })
      .select("-__v")
      .then((oneUser) => {
        if (!oneUser) {
          res
            .status(404)
            .json({ message: "The User you are looking for does not exist." });
          return;
        }
        res.json(oneUser);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // Create new User

  createUser({ body }, res) {
    User.create(body)
      .then((newUser) => res.json(newUser))
      .catch((err) => res.status(400).json(err));
  },

  // Update one User by id
  
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((updatedUser) => {
        if (!updatedUser) {
          res
            .status(404)
            .json({ message: "No user found!" });
          return;
        }
        res.json(updatedUser);
      })
      .catch((err) => res.status(400).json(err));
  },

  // Remove one User by id

  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then((deletedUser) => {
        if (!deletedUser) {
          res
            .status(404)
            .json({ message: "No user found!" });
          return;
        }
        res.json(deletedUser);
      })
      .catch((err) => res.status(400).json(err));
  },


  // Add Friend to User's friend list

  newFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $push: { friends: params.friendId } },
      { new: true }
    )
      .then((updatedUser) => {
        if (!updatedUser) {
          res.status(404).json({
            message: "No user found!",
          });
          return;
        }
        res.json(updatedUser);
      })
      .catch((err) => res.json(err));
  },

  // Delete Friend 

  deleteFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $pull: { friends: params.friendId } },
      { new: true }
    )
      .then((updatedUser) => {
        if (!updatedUser) {
          res.status(404).json({
            message: "No user found!",
          });
          return;
        }
        res.json(updatedUser);
      })
      .catch((err) => res.json(err));
  },
};

module.exports = userController;
