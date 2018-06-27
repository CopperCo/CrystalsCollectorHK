$(document).ready(function() {
  // VARIABLES
  var Gem1Value = randomGemNum();
  var Gem2Value = randomGemNum();
  var Gem3Value = randomGemNum();
  var Gem4Value = randomGemNum();
  var gameScore = randomGemNum();

  var gameRandomScore = [Math.floor(Math.random() * 19) + 101];
  console.log('Game value is: ' + gameRandomScore);
  $('#rndScore').text(gameRandomScore);

  function randomGem1Value() {
    var gemOneValue = [Math.floor(Math.random() * 12) + 1];
    console.log('Gem1 value is: ' + gemOneValue);
    return gemOneValue;
  }

  function randomGemNum() {
    return Math.floor(Math.random() * 12) + 1;
  }

  $('#Gem1').click(function() {
    $('#g1Value').text(Gem1Value);
    $('#g2Value').text(Gem2Value);
    $('#g3Value').text(Gem3Value);
    $('#g4Value').text(Gem4Value);
  });

  // END OF SCRIPT
});
