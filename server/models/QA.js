const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const qaSchema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  category: {
    type: String,
    required: [true, "category required."],
    enum: ["HTML", "CSS", "Javascript", "React", "NodeJS"],
  },
  level: {
    type: String,
    required: [true, "level required."],
    enum: ["basic", "medium", "expert"],
  },
});

const QA = mongoose.model("QA", qaSchema);

module.exports = QA;
