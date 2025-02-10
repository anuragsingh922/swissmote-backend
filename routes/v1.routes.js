const express = require("express");
const router = express();

const auth_routes = require("./v1/auth.routes");
const event_routes = require("./v1/events.routes");

router.use("/auth", auth_routes);
router.use("/events", event_routes);

module.exports = router;
