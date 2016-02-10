var $message = $("#message"),
    $letters = $("#spaces"),
    $guesses = $("#guesses"),
    $apples = $("#apples");

var randomWord = (function() {
  var words = ["abacus", "quotient", "octothrope"];

  function without() {
    var new_arr = [],
        args = Array.prototype.slice.call(arguments);

    words.forEach(function(el) {
      if (args.indexOf(el) === -1) {
        new_arr.push(el);
      }
    });
    return new_arr;
  }
  return function() {
    var word = words[Math.floor(Math.random() * words.length)];
    words = without(word);
    return word;
  };
})();

function Game() {
  this.incorrect = 0;
  this.leters_guessed = [];
  this.correct_spaces = 0;
  this.word = randomWord();
  if (!this.word) {
    this.displayMessage("Sorry, I've ran out of words");
  }
  this.word = this.word.split("");
  this.init();
}

Game.prototype = {
  createBlanks: function() {
    var spaces = (new Array(this.word.length + 1)).join("<span></span>");
    $letters.find("span").remove();
    $letters.append(spaces);
    this.$spaces = $("#spaces span");
  },

  displayMessage: function(text) {
    $message.text(text);
  },

  init: function() {
    this.createBlanks();
  }
}
