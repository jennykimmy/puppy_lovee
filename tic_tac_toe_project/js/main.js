var gameboard = [
    ['', '', ''];
    ['', '', ''];
    ['', '', ''];
}

var player1 = "X";
var player2 = "O";


function loadFunction() {
	return player1;
}

loadFunction();


document.getElementById("box1").addEventListener("click", addPiece);
document.getElementById("box2").addEventListener("click", addPiece);
document.getElementById("box3").addEventListener("click", addPiece);
document.getElementById("box4").addEventListener("click", addPiece);
document.getElementById("box5").addEventListener("click", addPiece);
document.getElementById("box6").addEventListener("click", addPiece);
document.getElementById("box7").addEventListener("click", addPiece);
document.getElementById("box8").addEventListener("click", addPiece);
document.getElementById("box9").addEventListener("click", addPiece);


function addPiece () {
document.getElementById("box1").innerHTML = player1;
}
