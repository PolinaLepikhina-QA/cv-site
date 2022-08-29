var location1 = Math.floor(Math.random() * 5);
var location2 = location1 + 1;
var location3 = location2 + 1;

var shot; //undefined
var hits = 0;
var shots = 0;

var isSunk = false;

var n = 7;
var board = new Array(n).fill(0);

while (isSunk == false){
	shot = prompt("Are you ready for shooting? (Enter a number from 0 to 6):");
	if (shot < 0 || shot > 6){
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

var status = "You shot " + shots + " times. Your accuracy level is " + (3/shots);
alert(status);


