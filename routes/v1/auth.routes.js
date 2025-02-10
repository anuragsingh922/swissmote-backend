const express = require("express");
const router = express();
const {
  login,
  register,
  verify,
  logout,
} = require("../../controller/authController");

router.get("/verify", verify);
router.post("/login", login);
router.get("/logout", logout);
router.post("/register", register);

module.exports = router;
