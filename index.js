const read = require("readline-sync")

var userName = read.question("Tell me your name: ");
var welcomeMsg = "Welcome " + userName + " Let's see how much you know Deeshan Sharma.."
console.log("\n" + welcomeMsg)

console.log("\nThere will be some MCQ questions where you have to enter your choice which you feel is correct option.\nYou will get +1 score for every right answer.\n+1 Level for two consecutive correct answers and -1 level for every wrong answer.\nSo, let's start")

var score = 0;
var level = 1;

function checkLevel(score, result) {
	if (result == 't') {
		if (score % 2 == 0) {
			level += 1;
		}
	}
	if (level < 1) {
		level = 1;
	}
}

function question(que, options, corAns) {
	console.log("\n" + que)
	for (var i = 0; i < options.length; i++) {
		console.log(`${i + 1}. ${options[i]}`);
	}
	usrAns = read.question("Your Choice: ");
	if (usrAns == corAns) {
		score += 1;
		checkLevel(score, 't');
		console.log('\nCongratulations..! You are right');
	}

	else {
		level -= 1;
		checkLevel(score, 'f')
		console.log(`\nDamn..! You are wrong..! Correct Answer is ${options[corAns - 1]}.`);
	}
	console.log(`Your current Score: ${score}\nYour current Level: ${level}`)
}

question("What is my age?", [18, 19, 20, 21], 2);
question("What is my favorite movie type?", ["Action", "Love Story"], 1);
question("What is my favorite fast-food?", ["Burger", "Momos", "Pizza", "Chowmine"], 3);
question("Which country I dream to visit?", ["Russia", "Brazil", "Germany", "USA"], 4);
question("Which is my favorite drink?", ["Chai", "Coffee"], 1);
question("Which is my favorite colour?", ["Red", "Orange", "Black"], 3);
question("Where do I live?", ["Delhi", "Assam", "Gujrat", "MP"], 1);
question("What is my aim?", ["Software Engineer", "Manager", "Graphic Designer", "Full Stack Web Developer"], 4);

function finalRes(score) {
	if (score >= 6) {
		console.log("\n\nHmmm.. You know me quite well hnn")
	}
	else {
		console.log("\n\nHmmm.. It seems you don't know me well")
	}
	console.log(`\nYou Scored ${score}/8. And managed to reach Level ${level}.\nGood Bye ${userName}..! See You Again`)
}

finalRes(score);