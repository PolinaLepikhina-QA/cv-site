var location1 = Math.floor(Math.random() * 5) + 1;
var location2 = location1 + 1;
var location3 = location2 + 1;

var shot; //undefined
var hits = 0;
var shots = 0;

var isSunk = false;

var n = 7;
var board = new Array(n).fill(0);

while (isSunk == false){
	shot = prompt(
		"Hey! This is a battleship mini game. Imagine that a 3-deck enemy ship is located at 7 horizontal cells ••••••• (from 1 to 7). Your task is to sink it in fewer attempts. Are you ready for shooting? (Enter a number from 1 to 7):"
	);
	if (shot === null)
		break
	if (shot < 1 || shot > 7){
		alert("Incorrect number! Try again");
	} else if (isNaN(shot)){
		alert("The entered value is not a number! Try again");
	} else if (board[shot] == 1){
		alert("It's your second shot to this field. Try again")
	} else {
		board[shot] = 1;
		shots = shots + 1;
		if (shot == location1 || shot == location2 || shot == location3){
			hits = hits + 1;
			if (hits == 3){
				isSunk = true;
				alert("You've won! 🎊");
			}
		} else {
			alert("You missed ☹")
		}
	}
}

if (shot === null)
	alert('Game is over')
else {
	var status = "You shot " + shots + " times. Your accuracy level is " + (3/shots);
	alert(status);
}
