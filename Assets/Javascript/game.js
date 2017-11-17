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
//redUp();


function oilSlickUp() {
	totalScore = totalScore + gemTwo;
}

//oilSlickUp();

function orangeUp() {
	totalScore = totalScore + gemThree;
}

//orangeUp();

function blueUp() {
	totalScore = totalScore + gemFour;
}






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
console.log(totalScore, gemOne);

//Score Board 
if (totalScore === initialTarget) {
	 (totalWins++);
}
 
else if (totalScore > initialTarget) {
	(totalLosses++);
}





//write totalLosses/Wins as an increment as 
//shown in the 11/15 exercise Coin-Flip





