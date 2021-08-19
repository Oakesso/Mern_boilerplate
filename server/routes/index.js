const express = require("express");
const User = require("../models/User");
const requireAuth = require("../middlewares/requireAuth");
const router = express.Router();

// router.get("/me", requireAuth, (req, res, next) => {
//   User.findById(req.session.currentUser._id)
//     .then((user) => {
//       res.status(200).json(user);
//     })
//     .catch(next);
// });

// GET user can see index page.
router.get("/", (req, res, next) => {
  res.status(200).json({ message: "Fully connected to index page !" });
});

// GET user can

module.exports = router;
