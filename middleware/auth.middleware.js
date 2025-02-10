const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config.js");

const fetchuser = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(400).send("Please provide the Authorization Token.");
  }
  try {
    const data = jwt.verify(token, jwt_secret);
    req.email = data?.email;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please enter valid details error" });
  }
};

module.exports = { fetchuser };
