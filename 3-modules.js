//require - function to use modules
//Modules - Encapsulated Code (only share minimum)
const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternativeModuleFlavour");

require("./7-mindGrenade"); //this will invoke code in the file. ie sum will be displayed

// sayHi("Ram");
// sayHi(names.john);
// sayHi(names.peter);
