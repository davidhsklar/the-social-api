const router = require("express").Router();

const {
  getAllThoughts,
  createThought,
  getThoughtsById,
  updateThought,
  deleteThought,
  createReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// Route: /api/thoughts
router.route("/").get(getAllThoughts);

// Route: /api/thoughts/<userId>
router.route("/:userId").post(createThought);

// Route: /api/thoughts/:id
router.route("/:id").get(getThoughtsById).put(updateThought);

// Route: /api/thoughts/<userId>/<thoughtId>
router.route("/:userId/:thoughtId").put(createReaction).delete(deleteThought);

// Route: /api/thoughts/<userId>/<thoughtId>/<reactionID>
router.route("/:userId/:thoughtId/:reactionId").delete(removeReaction);

module.exports = router;
