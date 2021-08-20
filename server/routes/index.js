const express = require("express");
const User = require("../models/User");
const QA = require("../models/QA");
const requireAuth = require("../middlewares/requireAuth");
const mongoose = require("mongoose");
const router = express.Router();
// const data = require("../data/data"); // data for testing without mongoDB connection.

// GET user read all Q&A data.
router.get("/qa", (req, res, next) => {
  QA.find()
    .then((qaDocument) => {
      // console.log("qaDocument: ", qaDocument);
      if (!qaDocument) {
        return res.status(404).json({ message: "This resource doesn't exist" });
      }
      res.status(200).json(qaDocument);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});

// GET user can see one particular key in Q&A data object.
router.get("/qa/:id", (req, res, next) => {
  res.status(200).json({ message: "Fully connected to index page !" });
});

// POST user can create Q&A data.
router.post("/qa", (req, res, next) => {
  // console.log("req.body : ", req.body);
  QA.create(req.body)
    .then((qaCreated) => {
      // console.log("qaCreated: ", qaCreated);
      res.status(200).json(qaCreated);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

// PATCH user can update "partialy" one particular key in Q&A data object.
router.patch("/qa/:id", async (req, res, next) => {
  // console.log("req.params :", req.params);
  // console.log("req.body :", req.body);
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id)) {
    return res
      .status(400)
      .json({ message: "id parameter not valid mongodb objectId" });
  }
  const qaToUpdate = req.body;
  try {
    const updated = await QA.findByIdAndUpdate(id, qaToUpdate, { new: true });
    res.status(200).json(updated);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// DELETE user can delete one particular Q&A data.
router.delete("/qa/:id", (req, res, next) => {
  console.log("req.params :", req.params);
  console.log("req.params.id :", req.params.id);
  console.log("req.body :", req.body);
  QA.findByIdAndDelete(req.params.id)
    .then((qaDocument) => {
      if (!qaDocument) {
        return res
          .status(404)
          .json({ message: "This ressource doesn't exist" });
      }
      res.status(200).json(qaDocument);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

module.exports = router;
