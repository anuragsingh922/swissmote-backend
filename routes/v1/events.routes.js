const express = require("express");
const { fetchuser } = require("../../middleware/auth.middleware");
const router = express();
const {
  getEvents,
  addEvent,
  getEventDetails,
  deleteEvent,
  updateEvent,
  markAttandence
} = require("../../controller/eventController");

router.use(fetchuser);

router.post("/", getEvents);
router.post("/new-event", addEvent);
router.patch("/", updateEvent);
router.get("/detail", getEventDetails);
router.delete("/", deleteEvent);
router.post("/attendence", markAttandence);

module.exports = router;
