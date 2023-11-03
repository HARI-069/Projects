'use strict';
// console.log(document.querySelector('.message').textContent);
// console.log(
//   (document.querySelector('.message').textContent = 'Correct Number')
// );
//

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

// const a = Math.trunc(Math.random() * 10) + 1;
// console.log(a);

let score = 20;
console.log(score);

let highscore = 0;
// Function for class: message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// Function for class: number
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
// Function for class: score
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
// Function for class: highscore-update
const displayHighscoreUpdate = function (highscoreUpdate) {
  document.querySelector('.highscore-update').textContent = highscoreUpdate;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  // when there is NO INPUT
  if (!guess) {
    console.log(typeof !guess);
    if (score > 1) {
      displayMessage('❌ No Number ❌');
    }
    // When the guess is Correct
  } else if (guess === secretNumber) {
    displayMessage('🥰 Correct Answer');
    displayNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // displayNumber()((style.width = '30rem'));

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      displayHighscoreUpdate(`Highscore is updated to ${highscore}`);
    }
    // When the guess is high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? '📉 Bit Low' : '📈 Bit High');
      score--;
      // console.log(score);
      displayScore(score);
    } else {
      displayMessage('😒 You Lost Your game');
      document.querySelector('body').style.backgroundColor = '#FF3333';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayScore(score);
  displayNumber('?');
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = ' ';
  displayHighscoreUpdate(' ');

  // Inline Style
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
