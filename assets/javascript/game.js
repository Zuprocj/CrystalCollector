var userTotal= 0;
var wins = 0;
var losses = 0;
var random = Math.floor(Math.random()*102+19);

var ruby = Math.floor(Math.random()*12+1);
var diamond = Math.floor(Math.random()*12+1);
var topaz = Math.floor(Math.random()*12+1);
var emerald = Math.floor(Math.random()*12+1);

$("#randomNumber").text(random);
$("#winCounter").text(wins);
$("#lossCounter").text(losses);

function startGame() {
    random = Math.floor(Math.random()*102+19);
    console.log(random);
    $("#randomNumber").text(random);
    var ruby = Math.floor(Math.random()*12+1);
    var diamond = Math.floor(Math.random()*12+1);
    var topaz = Math.floor(Math.random()*12+1);
    var emerald = Math.floor(Math.random()*12+1);
    userTotal = 0;
    $("#score").text(userTotal);
}

function winner() {
    alert("You Won!!");
    wins++;
    $("#winCounter").text(wins);
    reset();
}

function loser() {
    alert("You Lose!!");
    losses++;
    $("#lossCounter").text(losses);
    reset();
}

startGame();

$("#image1").on("click", function() {
    userTotal = userTotal + num1;
    console.log("New userTotal " + userTotal);
    $("#score").text(userTotal);

    if (userTotal === random) {
        winner()
    }

    else if (userTotal > random) {
        loser()
    } 
})
