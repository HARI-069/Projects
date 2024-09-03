'use strict';

const player0Ele = document.querySelector('.player--0');
const player1Ele = document.querySelector('.player--1');
const score0Ele = document.querySelector('.score');
const score1Ele = document.querySelector('#score--1');
const diceEle = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnhold = document.querySelector('.btn--hold');
const currentScore0Ele = document.getElementById('current--0');
const currentScore1Ele = document.getElementById('current--1');
// const activePlayerEle = document.querySelector('player--active');

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0Ele.textContent = 0;
  score1Ele.textContent = 0;
  currentScore0Ele.textContent = 0;
  currentScore1Ele.textContent = 0;

  diceEle.classList.add('hidden');
  player0Ele.classList.add('player--active');
  player1Ele.classList.remove('player--active');
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0Ele.classList.toggle('player--active');
  player1Ele.classList.toggle('player--active');
};

const playersActive = function () {
  player0Ele.classList.add('player--active');
  player1Ele.classList.remove('player--active');
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    //   console.log(dice);
    diceEle.classList.remove('hidden');
    diceEle.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnhold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] = scores[activePlayer] + currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    if (scores[activePlayer] >= 30) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      diceEle.classList.add('hidden');
      playing = false;
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);

//                               **NOTE**
/*
 * The above program is coded in my way but there also another method and that is more efficient than this, which we can also create a function named
  init(INITIALIZATION)

  let scores,currentScores,activePlayer,playing;

  const init = function(){
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    player0Ele.classList.add('player--active');
    player1Ele.classList.remove('player--active');
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
  };
  init();

 * then we can simply use this function in a btnNew eventListener
  
 * Here we didn't call the function javaScript will automatically call this function when the btnNew(NEW GAME) is clicked  
  
  btnNew.addEventListener('click',init);

 */
const a = [
  { name: 'Hariharan', age: 20 },
  { name: 'LL', age: 21 },
];
console.table(a);
{
  Vebuzoz;
  ('um@biraha.bb');
}
