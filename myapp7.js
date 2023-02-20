var player1 = 'George'
var player2 = 'Pandian'

/*  This task is for playing a Dice game using js
function editNames() {
       player1 = prompt("Change Player1 name");
       player2 = prompt("Change Player2 name");  */

function rollDice() {
	var randomNumber1 = Math.floor(Math.random() * 7)
	var randomNumber2 = Math.floor(Math.random() * 7)
	console.log(randomNumber1)
	console.log(randomNumber2)

/*     if (randomNumber1 == randomNumber2) {
		return 'Draw';
	} else if (randomNumber1 < randomNumber2) {
		return player2 +' Wins';
	}
	else if (randomNumber1 > randomNumber2) {
		return player1 + 'Wins';
	}
}       */

       let result = (randomNumber1 > randomNumber2) ? player1 + 'Wins' : player2 + 'Wins';
		return result
}
console.log(rollDice());

