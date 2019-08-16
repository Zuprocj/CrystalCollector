var wins = 0;
var losses = 0;
var crystal = {
   ruby : {value: 0}, 
   diamond : {value: 0}, 
   topaz : {value: 0}, 
   emerald :{value: 0}
};
var score = 0;
var target = 0;
var winCount = 0;
var lossCount = 0;
var getRandom = function(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + 1;
}
var startGame = function() {
   score = 0;
   target = getRandom(19, 120);
   crystal.ruby.value = getRandom(1, 12);
   crystal.diamond.value = getRandom(1, 12);
   crystal.topaz.value = getRandom(1, 12);
   crystal.emerald.value = getRandom(1, 12);
   $("#score").html(score);
   $("#target").html(target);
   console.log("target " + target);
   console.log("ruby " + crystal.ruby.value + " | diamond " + crystal.diamond.value +
    " | topaz " + crystal.topaz.value + " | emerald " + crystal.emerald.value)
}
var addValues = function(crystal) {
   score = score + crystal.value;
   $("#score").html(score);
   checkWin();
}
var checkWin = function() {
   if (score > target) {
   alert("You lost!! You collected too many crystals");
   lossCount++;
   $("#lossCounter").html(lossCount);
   startGame();
}
   else if (score == target) {
   alert("You win! You got the correct amount of srystals");
   winCount++;
   $("#winCounter").html(winCount);
   startGame();
   }
}
startGame ();
$("#ruby").click(function() {
   addValues(crystal.ruby);
});
$("#diamond").click(function() {
   addValues(crystal.diamond);
});
$("#topaz").click(function() {
   addValues(crystal.topaz);
});
$("#emerald").click(function() {
   addValues(crystal.emerald);
});