const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String },
    email: { type: String, required: [true, "email required."] },
    password: { type: String, required: [true, "password required."] },
    isAdmin: Boolean,
    history: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "QuestionAnswer",
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
