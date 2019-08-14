// global variables
var wins = 0;
var losses = 0;

var crystal = {
   ruby:
   { 
      value: 0 
   },
   diamond:
   { 
      value: 0
   },
   topaz:
   { 
      value: 0
   },
   emerald:
   { 
      value: 0
   }
};

var score = 0;
var target = 0;

var winCount = 0;
var lossCount = 0;

var getRandom = function(min, max) {
   return Math.floor(Math.random() * (120 - 19 + 1)) + 1;
}

var startGame = function() {
   var score = 0;
   target = getRandom(19, 120);
   crystal.ruby.value = getRandom(1, 12);
   crystal.diamond.value = getRandom(1, 12);
   crystal.topaz.value = getRandom(1, 12);
   crystal.emerald.value = getRandom(1, 12);
   $("#score").html(score);
   $("#target").html(target);
}

var addValues = function(crystal) {
   score = score + crystal.value;
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