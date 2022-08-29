var location1 = 3;
var location2 = 4;
var location3 = 5;

var shot; //undefined
var hits = 0;
var shots = 0;

var isSunk = false;

while (isSunk == false){
	shot = prompt("Are you ready for shooting? (Enter a number from 0 to 6):");
	if (shot < 0 || shot > 6){
		alert("Incorrect number! True again");
	} else {
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

var status = "You shot " + shots + "times. Your accuracy level is " + (3/shots*100%);
alert(status);