const router = require("express").Router();
const apiRoutes = require("./api");

// Set Routes
router.use("/api", apiRoutes); 

// No route has handled the request
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
