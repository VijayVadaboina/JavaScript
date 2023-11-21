'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = function (msg) {
  document.querySelector('.message').textContent = msg;
};

document.querySelector('.number').textContent = '?';
document.querySelector('.check').addEventListener('click', function () {
  const guessNo = Number(document.querySelector('.guess').value);
  if (!guessNo) {
    //document.querySelector('.message').textContent = ' No number';
    displayMessage(' No number');
  } else if (guessNo === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    //document.querySelector('.message').textContent = 'correct number';
    displayMessage('correct number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessNo !== secretNumber) {
    document.querySelector('body').style.backgroundColor = '#222';
    if (score > 1) {
      document.querySelector('.message').textContent =
        guessNo > secretNumber ? 'greater number' : 'lesser number';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'you lost the game';
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
  //   } else if (guessNo > secretNumber) {
  //     document.querySelector('body').style.backgroundColor = '#222';
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'greater number';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'you lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guessNo < secretNumber) {
  //     document.querySelector('body').style.backgroundColor = '#222';
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'lesser number';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'you lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  //document.querySelector('.message').textContent = 'start guessing...';
  displayMessage('start guessing....');
  document.querySelector('.number').textContent = '?';
});
