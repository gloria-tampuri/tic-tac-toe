const activeGame = document.getElementById('active-game')
const startGameBtn = document.getElementById('start-game');
const gameConfiguration = document.getElementById('game-configuration');



//functions
 function hideConfig(){
     activeGame.style.display = 'block';
     gameConfiguration.style.display = 'none';
}





//events
startGameBtn.addEventListener('click', hideConfig)