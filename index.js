var read = require("readline-sync")

var userName = read.question("Tell me your name: ");
var welcomeMsg = "Welcome " + userName + " Let's see how much you know Deeshan Sharma.."
console.log("\n" + welcomeMsg)

console.log("\nThere will be some MCQ questions where you have to enter your choice which you feel is correct. And then you will get +1 score for every right answer. So, let's start\n")

score = 0;
function question(que, options, corAns) {
  console.log(que)
  for(var i = 0; i < options.length; i++){
    console.log(`${i+1}. ${options[i]}`);
  }
  usrAns = read.question("Your Choice: ");
  if (usrAns == corAns){
    score += 1;
    console.log(`You are right your current score: ${score}`)
  }
  else{
    console.log(`You are wrong your current score: ${score}`)
  }
}

question("What is my age", [18, 20, 19, 21], 3)