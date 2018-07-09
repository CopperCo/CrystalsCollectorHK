// VARIABLES
var gameScore;
var wins = 0;
var losses = 0;
var playerGemTotalCost = 0;

var gemObject = {
  Gem1: 0,
  Gem2: 0,
  Gem3: 0,
  Gem4: 0
};

function randomNumber(minVal, maxVal) {
  // This function takes two numbers a minimum and maximum and generates a random number between these two values.
  return Math.floor(Math.random() * (maxVal - minVal + 1) + minVal);
}

function setupBoard() {
  gemObject.Gem1 = randomNumber(1, 12);
  gemObject.Gem2 = randomNumber(1, 12);
  gemObject.Gem3 = randomNumber(1, 12);
  gemObject.Gem4 = randomNumber(1, 12);
  playerGemTotalCost = 0;

  gameScore = randomNumber(19, 120);
}

function updateGUI() {
  // Set wins
  $('#winScore').text(wins);
  // Set loss
  $('#lostScore').text(losses);
  // Cost of Gems
  $('#rndScore').text(gameScore);
  // Player Total Score
  $('#playerGemTotalCost').text(playerGemTotalCost);
}

$(document).ready(function() {
  setupBoard();
  updateGUI();
  $('.ui.modal').modal('show');

  $('.clickInstructions').on('click', function() {
    $('.ui.modal').modal('show');
  });

  $('.crystals').fadeIn();

  $('.gem').click(function() {
    playerGemTotalCost += gemObject[this.id];
    updateGUI();
    if (playerGemTotalCost == gameScore) {
      wins++;
      updateGUI();
      alert('You won!');
      setupBoard();
    } else if (playerGemTotalCost > gameScore) {
      losses++;
      updateGUI();
      alert('Womp Womp - Better luck next round...');
      setupBoard();
    }
    updateGUI();
  });

  // END OF SCRIPT
});
