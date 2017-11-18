 // Global Variables //

var initialTarget = Math.floor(Math.random() * 100 + 20);
var gemOne = Math.floor(Math.random() * 12 + 1);
var gemTwo = Math.floor(Math.random() * 12 + 1);
var gemThree = Math.floor(Math.random() * 12 + 1);
var gemFour = Math.floor(Math.random() * 12 + 1);
var initialScore = 0;
var totalScore = 0;
var totalWins = 0;
var totalLosses = 0;

 


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
	$("#totalscore").html(totalScore)
});

$("#oilslick").on("click", function(){
	oilSlickUp()
	$("#totalscore").html(totalScore)
});

$("#orange").on("click", function() {
	orangeUp()
	$("#totalscore").html(totalScore)
});

$("#blue").on("click", function() {
	blueUp()
	$("#totalscore").html(totalScore)
});

//Score Board: Take Two
if (totalScore == initialTarget) {
	totalWins++;
	$("#winTotal").html("totalWins");
} 
else if (totalScore > initialTarget) {
	totalLosses++;
	$("#lossTotal").html("totalLosses");
}





