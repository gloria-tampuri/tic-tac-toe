const players =[
    {
     playerName:'',
     symbol   :'X'
    },

    {
        playerName:'',
        symbol:'0'
    },
]

const actualName1 = document.getElementById('actualname1');
const actualName2 = document.getElementById('actualname2');
const addPlayer1 = document.getElementById('add-player-1-name');
const addPlayer2 = document.getElementById('add-player-2-name');
const configOverlay = document.getElementById('config-overlay');
const cancelBtn = document.querySelector('.cancel');
const confirmBtn = document.querySelector('.confirm');
const nameValue = document.getElementById('playername');
const backDrop = document.querySelector('.backdrop');
const errorMessage = document.getElementById('config-error')
let playerStateId;

// functions

// function to show modal to input playernames
function showmodal(e) {
    playerStateId = e.target.id;
    configOverlay.style.display = 'block';
    backDrop.style.display ='block';

}

// closing the modal
function closeModal() {
    configOverlay.style.display = 'none';
    nameValue.value ="";
    backDrop.style.display ='none';
    errorMessage.textContent ='';
   
}

//player validation and text acceptance
function confirmPlayer(e) {
    e.preventDefault();
    let name = nameValue.value.trim();
    
    if (playerStateId === 'add-player-1-name') {
        // name.length < 1 ? null  : actualName1.textContent = name;
        if(name.length < 1 ){
            // alert(typeof name);
            // 
            // e.target.firstElementChild.classList.add('error');
            errorMessage.textContent ='Please enter a valid username!';
            errorMessage.style.color ='rgb(136, 2, 2)'
            return;
            // closeModal()
            // return null;
        }else{
            // alert(typeof name)
            closeModal()
            return actualName1.textContent = name;
        }
    } else {
        if(name.length < 1){
            errorMessage.textContent ='Please enter a valid username!';
            errorMessage.style.color ='rgb(136, 2, 2)'
            // closeModal()
            return ;
        }else{
            closeModal()
            return actualName2.textContent = name
        }
        
    }
    
    // let defaultName =actualName1.textContent;

    // if (name.length < 1) {
    //    return alert('Enter valid username');
    // }

    // actualName1.textContent = defaultName;
    return closeModal();
}


// events
addPlayer1.addEventListener('click', showmodal);
addPlayer2.addEventListener('click', showmodal);
cancelBtn.addEventListener('click', closeModal);
confirmBtn.addEventListener('click', confirmPlayer);
backDrop.addEventListener('click', closeModal)
