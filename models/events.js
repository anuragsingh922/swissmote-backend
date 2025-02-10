const mongoose = require("mongoose");

const EventsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    attendees: {
      type: Number,
      default: 0,
    },
    maxAttendees: {
      type: String,
      required: true
    },
    isFree: {
      type: Boolean,
      required: true,
    },
    price: {
      type: String,
      default: '0'
    },
  },
  { timestamps: true }
);

const Events = mongoose.model("Events", EventsSchema);
module.exports = Events;
