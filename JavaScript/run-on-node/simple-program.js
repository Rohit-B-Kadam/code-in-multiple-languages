// This is JavaScript simaple program

/**
 * Notes:
 *      1. Since JavaScript is interpreted language so their is no entry function it runs from starting line.
 *      2. This Javascript will run NodeJS(JavaScript Runtime). 
 */


// Import
const prompt = require('prompt-sync')({sigint: true});


// Javascript function
function greeting(name){
    console.log("--------------------")
    console.log(`Hi, ${name}`)
    console.log("Congrats you have successfully run the JavaScript program on Nodejs a JavaScript Runtime")
}


// Script start here
console.log("Welcome to the JavaScript World")      // display a message on console
const name = prompt("Enter your name: ");           // accepting string value from user inputs
greeting(name)                                      // Calling user defined function