$(document).ready(function() {
  // VARIABLES
  var Gem1Value = randomGem1Value();
  var Gem2Value = 0;
  var Gem3Value = 0;
  var Gem4Value = 0;
  var gameScore = 0;

  var gameRandomScore = [Math.floor(Math.random() * 19) + 101];
  console.log('Game value is: ' + gameRandomScore);
  $('#rndScore').text(gameRandomScore);

  function randomGem1Value() {
    var gemOneValue = [Math.floor(Math.random() * 12) + 1];
    console.log('Gem1 value is: ' + gemOneValue);
    return gemOneValue;
  }

  $('#Gem1').click(function() {
    // alert('You clicked Gem 1');
    // var Gem1Value = randomGem1Value();
    $('#g1Value').text(Gem1Value);
  });

  // END OF SCRIPT
});
