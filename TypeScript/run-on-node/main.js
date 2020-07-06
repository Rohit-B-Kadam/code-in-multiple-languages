"use strict";
exports.__esModule = true;
var prompt_create = require("prompt-sync");
var prompt = prompt_create({ sigint: true });
function greeting(name) {
    console.log("--------------------");
    console.log("Hi, " + name);
    console.log("Congrats you have successfully run the JavaScript program on Nodejs a JavaScript Runtime");
}
console.log("Welcome to the JavaScript World");
var name = prompt("Enter your name: ");
greeting(name);
//# sourceMappingURL=main.js.map