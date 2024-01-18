// Streams
/*
  1. Writable
  2. Readable
  3. Duplex
  4. Transform
*/

const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", {
  highWaterMark: 900,
  encoding: "utf-8",
});

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// encoding - for encoding

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});
