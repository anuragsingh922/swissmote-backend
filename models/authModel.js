const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    events: {
      type: [],
    },
    role: {
      type: String,
      default: "user",
    },
    session_count: {
      type: Number,
      default: 0,
    },
    profileIMG: {
      type: Object,
    }
  },
  { timestamps: true }
);

UserSchema.clearIndexes({ email: 1 }, { unique: true });

const User = new mongoose.model("User", UserSchema);
module.exports = User;
