//rules modal
swal("Play This Game Dummy<br>rules<br>* try to get your total up to the desired winning score<br>but watch out for those ones, that'll take you're round score down to 0<br>* press the hold button to add your current score to your round score.")
const rulesModal = document.querySelector('.swal2-popup');
rulesModal.style.padding = '2.5em';
rulesModal.style.paddingBottom = '3.8em';
let winningScore = 100;


const rollButton = document.querySelector('.btn-roll');
const dice1 = document.querySelector('#dice1');
const dice2 = document.querySelector('#dice2');
const holdButton = document.querySelector('.btn-hold');
const newGameButton = document.querySelector('.btn-new');

let gameOver = false;
let currentPlayer = 0;
let currentRoundScore = 0;

const game = {
    player0Current: document.getElementById('current-0'),
    player1Current: document.getElementById('current-1'),
    player0Score: document.getElementById('score-0'),
    player1Score: document.getElementById('score-1'),
    player0Panel: document.querySelector('.player-0-panel'),
    player1Panel: document.querySelector('.player-1-panel'),
    player0Name: document.getElementById('name-0'),
    player1Name: document.getElementById('name-1'),
    player0Total: 0,
    player1Total: 0,
}

const confirmRules = document.querySelector('.swal2-confirm');
confirmRules.addEventListener('click', function() {
    if(game.player0Total === 0 && game.player1Total === 0) {
        console.log('hello');
        swal({
            title: "Setup Game",
            text: "Winning Score:",
            input: 'number',
            inputPlaceholder: "100",
            inputClass: 'winning-score'
        });
        const chooseGameOptions = document.querySelector('.swal2-popup');
        chooseGameOptions.style.padding = '4em';

        let winningScore = document.getElementsByClassName('winning-score');
        console.log(winningScore);

        document.querySelector('.swal2-confirm').addEventListener('click', function() {
            
            // inputOptions can be an object or Promise
            const inputOptions = {
                    '#ff0000': '1',
                    '#00ff00': '3',
                    '#0000ff': '5'
                   
            }
            
            const {value: color} = swal({
                title: 'Best Out Of',
                input: 'radio',
                inputOptions: inputOptions,
                inputValidator: (value) => {
                return !value && 'You need to choose something!'
                }
            })
            
            if (color) {
                swal({html: 'You selected: ' + color})
            }
            document.querySelector('.swal2-popup').style.paddingBottom = '3.5em';
        })
        
    }
});

const random = function() {
    return Math.floor((Math.random() * 6) + 1);//change this back to a 6 and a 1 before software release
}

const togglePlayer = function() {
    currentPlayer = currentPlayer === 0 ? 1 : 0
}

newGameButton.addEventListener('click', function(){
    currentRoundScore = 0;
    game.player0Total = 0;
    game.player1Total = 0;
    gameOver = false;
    game.player0Score.textContent = 0;
    game.player1Score.textContent = 0;
    game.player0Name.textContent = "PLAYER 1"
    game.player1Name.textContent = "PLAYER 2"
});

rollButton.addEventListener('click', function() {
    if(!gameOver) {
        const random1 = random();
        const random2 = random();

        dice1.src = `dice-${random1}.png`;
        dice2.src = `dice-${random2}.png`;

        if(random1 === 1 || random2 === 1) {            
            game[`player${currentPlayer}Current`].textContent = 0;
            currentRoundScore = 0;
            game.player0Panel.classList.toggle('active');
            game.player1Panel.classList.toggle('active');
            togglePlayer();
            swal("you got a 1. you suck. next players turn");
        } else {
            currentRoundScore += random1 + random2;
            game[`player${currentPlayer}Current`].textContent = currentRoundScore;
        }
    }
});

holdButton.addEventListener('click', function() {
    if(!gameOver) {
        game[`player${currentPlayer}Total`] += currentRoundScore;
        game[`player${currentPlayer}Current`].textContent = 0;
        game[`player${currentPlayer}Score`].textContent = game[`player${currentPlayer}Total`];
        currentRoundScore = 0;

        if(game[`player${currentPlayer}Total`] >= winningScore) {
            game[`player${currentPlayer}Name`].textContent = "WINNER!!!"
            gameOver = true;
            swal({
                title: "Party on Dude!!",
                text: `Player ${currentPlayer + 1} YOU WIN!!!`,
                imageUrl: 'https://gph.to/2POXCuB',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
            })
            const youWinModal = document.querySelector('.swal2-popup')
            youWinModal.style.padding = '2.5em';
        } else {
            game.player0Panel.classList.toggle('active');
            game.player1Panel.classList.toggle('active');
            togglePlayer();
        }
    }
});

shortcuts.add('shift+up',function() {
    alert('You pressed shift+up')
})
     
shortcuts.add('ctrl+5',function() {
    document.body.style.background = "#ffff00";
})
     
shortcuts.add('alt+k',function() {
    document.getElementById("foobar").innerText = "Hello there Earthling!";
})
    
