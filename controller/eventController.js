const User = require("../models/authModel.js");
const EventModel = require("../models/events.js");
const UserModel = require("../models/authModel")
const { emitEvents } = require("../socket/events.js");

const getEvents = async (req, res) => {
  try {

    const { category, eventTime, date, time, isFree, status } = req.body;

    const query = {};
    if (category) query.category = category;
    if (eventTime) query.eventTime = eventTime;
    if (date) query.date = date;
    if (time) query.time = time;
    if (isFree) query.isFree = isFree;
    if (status) query.status = status;
    const events = await EventModel.find(query);

    const { events: userEvents } = await UserModel.findOne({ email: req?.email });

    console.log("Products : ", { events, userEvents });

    if (events.length > 0) {
      return res.status(200).json({ success: true, data: { events, userEvents }, message: "" });
    }
    return res.status(500).json({ success: false, data: [], messsage: "Failed to fetch products." });
  } catch (err) {
    console.error(err.message);
    return res.send({ message: "Something went wrong. Try again later!" });
  }
};

const getEventDetails = async (req, res) => {
  try {
    const { id } = req.query;
    const event = await EventModel.findById(id.toString());

    if (event) {
      return res.status(200).json({ success: true, data: event, message: "" });
    }
    return res.status(500).json({ success: false, data: [], messsage: "Failed to fetch products." });
  } catch (err) {
    console.error(err.message);
    return res.send({ message: "Something went wrong. Try again later!" });
  }
};

const addEvent = async (req, res) => {
  try {
    const { title, description, date, time, location, category, maxAttendees, isFree, price } = req.body;

    const newEvent = new EventModel({
      title, description, date, time, location, category, maxAttendees, isFree, price
    });

    console.log("New Event : ", newEvent);

    const newSavedEvent = await newEvent.save();

    return res.status(200).json({ success: true, data: newSavedEvent, message: "" });
  } catch (err) {
    console.error(err);
    return res.status(500).send({
      message: "Something went wrong. Try again later!",
      success: false,
      data: "",
    });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const { id } = req.query;
    const event = await EventModel.findAndDelete({ _id: id.toString() });

    return res.status(200).json({ success: true, data: event, message: "" });
  } catch (err) {
    console.error(err);
    return res.status(500).send({
      message: "Something went wrong. Try again later!",
      success: false,
      data: "",
    });
  }
};

const updateEvent = async (req, res) => {
  try {
    const { id, title, description, date, time, location, category, maxAttendees, isFree, price } = req.body;

    const toUpdateData = {
      title, description, date, time, location, category, maxAttendees, isFree, price
    }
    const updatedEvent = await EventModel.findOneAndUpdate({ _id: id.toString() }, { $set: toUpdateData }, { new: true });

    if (updatedEvent) {
      return res.status(200).json({ success: true, data: updatedEvent, message: "" });
    }
    return res.status(500).json({ success: false, data: "", messsage: "Failed to fetch products." });
  } catch (err) {
    console.error(err);
    return res.status(500).send({
      message: "Something went wrong. Try again later!",
      success: false,
      data: "",
    });
  }
};


const markAttandence = async (req, res) => {
  try {
    const { id, inc } = req.body;
    let query = {};
    if (inc) {
      query = { $inc: { attendees: 1 } }
    } else {
      query = { $inc: { attendees: -1 } }
    }
    const event = await EventModel.findOneAndUpdate({ _id: id.toString() }, query, { new: true });
    const eventIdStr = event?._id.toString();
    const user = await User.findOne({ email: req?.email });
    if (user) {
      if (!user.events.some((e) => e === eventIdStr)) {
        user.events.push(eventIdStr);
      } else {
        const updatedUserEvents = user.events.filter((item) => item !== eventIdStr);
        user.events = updatedUserEvents;
      }
      await user.save();
    }
    emitEvents({ event, userEvents: user?.events });
    return res.status(200).json(event);
  }
  catch (err) {
    console.error("Error in markAttandance : ", err);
  }
}






module.exports = {
  getEvents,
  addEvent,
  getEventDetails,
  deleteEvent,
  updateEvent,
  markAttandence
};
