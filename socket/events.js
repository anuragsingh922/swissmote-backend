const { getSocketInstance } = require("./socket");

const receiveEvents = (socket, io) => {
    socket.on("attendance_update", (eventData) => {
        console.log("Attendance updated:", eventData);

        io.emit("event_updated", eventData);
    });
};

const emitEvents = (event) => {
    try {
        const io = getSocketInstance();
        io.emit("attendence", event);
    } catch (error) {
        console.error("Error in emitEvents : ", error);
    }
}


module.exports = { receiveEvents, emitEvents }