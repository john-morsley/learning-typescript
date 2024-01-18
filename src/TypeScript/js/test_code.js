console.log("Test Code");

const sayHello = require("./test_functions.js").sayGreeting;

let name = "TypeScript";
let greeting = sayGreeting(name);

console.log("sayHello: " + greeting);