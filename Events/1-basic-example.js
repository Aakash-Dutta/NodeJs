// Events in node

const EventEmitter = require("events");

// instance of class EventEmitter
const customEmitter = new EventEmitter();

// on - listen for an event
// emit -emit an event

customEmitter.on("response", () => {
  console.log(`Data received `);
});

customEmitter.emit("response");
