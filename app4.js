// declare global vars
let scores, roundScores, activePlayer, gamePlaying, lastDice;
let roundScore = 0;
// on click of btn roll
document.querySelector('.btn-roll').addEventListener('click', function() {

  // 1. random number
    let dice0 = Math.floor(Math.random() * 6 + 1);
    let dice1 = Math.floor(Math.random() * 6 + 1);
  
    //2. Display the dice img based on random number
    const dicePic0 = document.querySelector('#dice1');
    const dicePic1 = document.querySelector('#dice2');
      
    dicePic0.style.display = 'block';
    dicePic1.style.display = 'block';
  
    dicePic0.src = `dice-${dice0}.png`
    dicePic1.src = `dice-${dice1}.png`
  
    //3. Update the round score IF the rolled number was NOT a 1
    if (dice0 !== 1 && dice1 !== 1) {
        // get the round score from dice rolls
        roundScore += dice0 + dice1;
        // update the current players score with round score, based on active player
        document.querySelector('#current-' + activePlayer).innerHTML = roundScore;
        // check if last dice roll is equal to current dice roll
    } else {
        // call next player function
        nextPlayer();
    }
    // set last dice roll to dice roll
    lastDice = dice;
    
});