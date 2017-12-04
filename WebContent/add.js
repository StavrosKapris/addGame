var riddle = {};
function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
function playGame() {
	var field1 = randomNumber(20, 50);
	var field2 = randomNumber(20, 50);
	var result = field1 + field2;

	var resultArray = generateRandomOptions(result);
	resultArray.push(result);
	resultArray.sort(function(a, b) {
		return 0.5 - Math.random()
	});
	riddle = {
		field1 : field1,
		field2 : field2,
		resultsArray : resultArray,
		answer : result
	};
	// console.log(field1, field2);
	// console.log(riddle);
	document.getElementById("field1").innerHTML = riddle.field1;
	document.getElementById("field2").innerHTML = riddle.field2;
	document.getElementById("option1").innerHTML = riddle.resultsArray[0];
	document.getElementById("option2").innerHTML = riddle.resultsArray[1];
	document.getElementById("option3").innerHTML = riddle.resultsArray[2];
	document.getElementById("option4").innerHTML = riddle.resultsArray[3];
}

function generateRandomOptions(sum) {
	var resultArray = [];
	var randomNumberArray = [];

	while (randomNumberArray.length < 3) {
		var random = randomNumber(1, 10);
		if (randomNumberArray.indexOf(random) > -1)
			continue;
		randomNumberArray.push(random);
	}
	// console.log(randomNumberArray, addSubtract);
	for (var i = 0; i < 3; i++) {
		var addSubtract = randomNumber(0, 1);
		var result = sum;
		if (addSubtract === 1) {
			result += randomNumberArray[i];
		} else {
			result -= randomNumberArray[i];
		}
		resultArray.push(result);
	}
	// console.log(resultArray);
	return resultArray;
}

function checkAnswer(selectedElement) {
	var after = document.getElementById("after");

	if (selectedElement.innerHTML == riddle.answer) {
		after.classList.remove("hide");
		after.classList.add("correct");
		after.innerHTML = "Good Job! Hit the button below to play again";
	} else {
		after.classList.remove("hide");
		after.classList.add("wrong");
		after.innerHTML = "ohhh ohhhh!Hit the button below to play again";
	}
}

function playAgain() {
	var after = document.getElementById("after");
	after.classList.remove("wrong");
	after.classList.remove("correct");
	after.classList.add("hide");
	playGame();
}
