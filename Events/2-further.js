// Events in node

const EventEmitter = require("events");

// instance of class EventEmitter
const customEmitter = new EventEmitter();

// on - listen for an event
// emit -emit an event

/* First listen for event then emit it
  We can call many functions listening the same event
  Also can pass parameters through emit
*/
customEmitter.on("response", (name, id) => {
  console.log(`Data received ${name} ${id}`);
});
customEmitter.on("response", () => {
  console.log(`Some other logic `);
});

customEmitter.emit("response", "john", 34);
