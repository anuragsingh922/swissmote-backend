const mongoose = require("mongoose");

const refreshTokenSchema = new mongoose.Schema({
  refresh_token: {
    type: String,
    required: true,
  },
  access_token: {
    type: String,
    required: true,
  },
  email : {
    type : String ,
    required : true
  }
});

const refreshToken = new mongoose.model("refreshToken", refreshTokenSchema);
module.exports = refreshToken;
