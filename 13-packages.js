// package.json - manifest file (stores important info about project/packages)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

//to access : common convention use varibale like _
const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
