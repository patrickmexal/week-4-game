 // Global Variables //

var initialTarget = Math.floor(Math.random() * 101)+ 19;
var gemOne = Math.floor(Math.random() * 12 + 1);
var gemTwo = Math.floor(Math.random() * 12 + 1);
var gemThree = Math.floor(Math.random() * 12 + 1);
var gemFour = Math.floor(Math.random() * 12 + 1);
var initialScore = 0;
var totalScore = 0;
var totalWins = 0;
var totalLosses = 0;

 
function randomNumber() {
initialTarget = Math.floor(Math.random() * 101) + 19;
$("#randomnumber").html(initialTarget);
}

// Sets initial random number target
$("#randomnumber").html(initialTarget);

// Sets Total Score to zero
$("#totalscore").html(totalScore);
	


function redUp() {
	totalScore = totalScore + gemOne;	
}

function oilSlickUp() {
	totalScore = totalScore + gemTwo;
}

function orangeUp() {
	totalScore = totalScore + gemThree;
}

function blueUp() {
	totalScore = totalScore + gemFour;
}




//JQuery Operation- 

$("#red").on("click", function(){
	redUp()
	gameOperation();
	$("#totalscore").html(totalScore)
});

$("#oilslick").on("click", function(){
	oilSlickUp();
	gameOperation();
	$("#totalscore").html(totalScore)
});

$("#orange").on("click", function() {
	orangeUp();
	gameOperation();
	$("#totalscore").html(totalScore)
});

$("#blue").on("click", function() {
	blueUp();
	gameOperation();
	$("#totalscore").html(totalScore)
});

//Score Board: Take Four... Still not working.
function gameOperation() {

	if (totalScore === initialTarget) {
		totalWins++;
		totalScore = 0;
		randomNumber();
		$("#wintotal").html("Wins:  " + "" + totalWins);
	} else if (totalScore > initialTarget) {
		totalLosses++;
		totalScore = 0;
		randomNumber();
		$("#losstotal").html("Losses:  " + "" + totalLosses);
		}
}


randomNumber();

console.log(initialTarget);










