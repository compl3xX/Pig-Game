'use strict';
//variables
let scores, currentScore, activePlayer, playing


//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnnew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const Player0El = document.querySelector('.player--0');
const Player1El = document.querySelector('.player--1');
//starting conditions

const gameVariable = function () {

    diceEl.classList.add('hidden');
    score0El.textContent = 0;

    score1El.textContent = 0;

    current0El.textContent = 0;
    current1El.textContent = 0;
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
}
gameVariable();
// player switching
const switchplayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;

    Player0El.classList.toggle('player--active');
    Player1El.classList.toggle('player--active');

}
//rolling dice funtionality
btnroll.addEventListener('click', function () {
    if (playing) {  //generate the random no.
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);
        //display the dice    
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        //check for the 1
        if (dice !== 1) {
            //add dice to the current score

            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;


        } else {
            //switching player
            switchplayer();



        }
    }
})
btnhold.addEventListener('click', function () {
    if (playing) {
        // player score to current score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        // if  100 is reached finished the game
        if (scores[activePlayer] >= 20) {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');

            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            // switching player

            switchplayer();
        }
    }
})

btnnew.addEventListener('click', function () {
    Player0El.classList.add('player--active');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');

    gameVariable();

})