
const actualName1 = document.getElementById('actualname1');
const actualName2 = document.getElementById('actualname2');
const addPlayer1 = document.getElementById('add-player-1-name');
const addPlayer2 = document.getElementById('add-player-2-name');
const configOverlay = document.getElementById('config-overlay');
const cancelBtn = document.querySelector('.cancel');
const confirmBtn = document.querySelector('.confirm');
const nameValue = document.getElementById('playername');
let playerStateId;

// functions

// function to show modal to input playernames
function showmodal(e) {
    playerStateId = e.target.id;
    configOverlay.style.display = 'block';

}
// closing the modal

function closeModal() {
    configOverlay.style.display = 'none';
    nameValue.value =""

}

function confirmPlayer(e) {
    e.preventDefault();
    let name = nameValue.value;

    if (playerStateId === 'add-player-1-name') {
        actualName1.textContent = name;
    } else {
        actualName2.textContent = name;
    }
    return closeModal();
}


// events
addPlayer1.addEventListener('click', showmodal);
addPlayer2.addEventListener('click', showmodal);
cancelBtn.addEventListener('click', closeModal);
confirmBtn.addEventListener('click', confirmPlayer)
