console.log("first");

// offloaded
setTimeout(() => {
  console.log("second");
}, 0);

console.log("third");
