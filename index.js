var read = require("readline-sync")

var userName = read.question("Tell me your name: ");
var welcomeMsg = "Welcome " + userName + " Let's see how much you know Deeshan Sharma.."
console.log("\n" + welcomeMsg)

console.log("\nThere will be some MCQ questions where you have to enter your choice which you feel is correct. And then you will get +1 score for every right answer. So, let's start\n")
