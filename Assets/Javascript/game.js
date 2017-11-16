 // Global Variables //

var initialTarget = Math.floor(Math.random() * 100 + 20);
var gemOne = Math.floor(Math.random() * 12 + 1);
var gemTwo = Math.floor(Math.random() * 12 + 1);
var gemThree = Math.floor(Math.random() * 12 + 1);
var gemFour = Math.floor(Math.random() * 12 + 1);
var initialScore = 0;
var totalScore = 0;

document.getElementById("randomnumber").innerHTML = initialTarget;
document.getElementById("totalscore").innerHTML = totalScore;

function redUp() {
	initialScore + gemOne;
}
document.getElementById("red").addEventListener("click", redUp);

redUp()

var totalScore = document.getElementById("totalscore").innerHTML

 $("#red").on("click", function() {
	$(initialScore + gemOne).text;
}) 




/* $("#red").click(redUp() {
	return redUp;
}); */




