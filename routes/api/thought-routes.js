const router = require("express").Router();

const {
  getAllThought,
  createThought,
  getThoughtById,
  updateThought,
  deleteThought,
  createReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// Route: /api/thoughts
router.route("/").get(getAllThought);

// Route: /api/thoughts/<userId>
router.route("/:userId").post(createThought);

// Route: /api/thoughts/:id
router.route("/:id").get(getThoughtById).put(updateThought);

// Route: /api/thoughts/<userId>/<thoughtId>
router.route("/:userId/:thoughtId").put(createReaction).delete(deleteThought);

// Route: /api/thoughts/<userId>/<thoughtId>/<reactionID>
router.route("/:userId/:thoughtId/:reactionId").delete(removeReaction);

module.exports = router;
