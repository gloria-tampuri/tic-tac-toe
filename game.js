const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];
let currentRound ;

let activePlayer = 0;
let editedplayer = 0;
const activeGame = document.getElementById('active-game')
const startGameBtn = document.getElementById('start-game');
const gameConfiguration = document.getElementById('game-configuration');
const gameFieldElements = document.querySelectorAll('#game-board li')

const activePlayerName = document.getElementById('active-player-name')

//functions
function startNewGame() {
    if (actualName1.textContent === 'Player Name' || actualName2.textContent === 'Player Name') {
        alert('Please set custom player names for both players')
    }
    else {
        activeGame.style.display = 'block';
        // gameConfiguration.style.display = 'none';
        activePlayerName.textContent = actualName1.textContent;
    }
}

function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
        activePlayerName.textContent = actualName2.textContent;
    }
    else {
        activePlayer = 0;
        activePlayerName.textContent = actualName1.textContent;

    }
}

function selectGameField(e) {
    const selectedField = e.target;
    

    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;


    if (gameData[selectedRow][selectedColumn]> 0){
        alert('please select an empty field')
        return;
    }

    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add('disabled');

    gameData[selectedRow][selectedColumn] = activePlayer + 1;
    console.log(gameData);

    const winnerId = checkForGameOver();
    console.log(winnerId);
    currentRound++;

    switchPlayer()
}


//loops

for (const gameFieldElement of gameFieldElements) {
    gameFieldElement.addEventListener('click', selectGameField);

}

function checkForGameOver(){
    //checking the rows for equality

    for (let i=0; i<3; i++){
        if(
            gameData[i][0]>0 &&
            gameData[i][0]== gameData[i][1]&&
            gameData[i][1]== gameData[i][2]
        )
        {
            return gameData[i][0];
        }
    }

    //checking the columns for equality
    if(
        gameData[2][0]>0 &&
        gameData[2][0]== gameData[1][1]&&
        gameData[1][1]== gameData[2][2]
    )
    {
        return gameData[0][0];
    }

    //checking diagonal:bottom left to top right

    if(
        gameData[2][0]>0 &&
        gameData[2][0]== gameData[1][1]&&
        gameData[1][1]== gameData[0][2]
    )
    {
        return gameData[2][0];
    }

    if(currentRound === 0){
        return -1; 
    }

    return 0;
}




//events
startGameBtn.addEventListener('click', startNewGame);