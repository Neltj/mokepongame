const btnMokeponPlayer = document.querySelector('#btn-mokepon')
const inputLetezio = document.querySelector('#letezio')
const inputGanjus = document.querySelector('#ganjus')
const inputEnisgas = document.querySelector('#enisgas')
const mokeponPlayer = document.querySelector('#mokepon-player')
const mokeponEnemyPlayer = document.querySelector('#mokepon-enemy-player')
const btnFire = document.querySelector('#btn-fire')
const btnWater = document.querySelector('#btn-water')
const btnPlant = document.querySelector('#btn-plant')
const attackSelect = document.querySelector('#selezionare-attacco')
const mokeponChoice = document.querySelector('#selezionare-mokepon')
const combatAgain = document.querySelector('#combat-again')


const restartButton = document.createElement('button')


let playerAttack
let enemyAttack
let resultCombat
let mokeponPlayerLife = 8
let mokeponEnemyLife = 8


attackSelect.style.display='none'
combatAgain.style.display='none'



btnMokeponPlayer.addEventListener('click', mokeponChoicePlayer)
btnFire.addEventListener('click', fireAttack)
btnWater.addEventListener('click', waterAttack)
btnPlant.addEventListener('click', plantAttack)

function mokeponChoicePlayer() {

    mokeponChoice.style.display = 'none'
    attackSelect.style.display= 'block'

    if(inputLetezio.checked){
        mokeponPlayer.innerHTML = 'Letezio'
    }else if (inputGanjus.checked) {
        mokeponPlayer.innerHTML = 'Ganjus'
    }else if (inputEnisgas.checked) {
        mokeponPlayer.innerHTML = 'Enisgas'
    }else {

        alert('Scegli un Mokepon altrimenti devi andarci tu!')
        attackSelect.style.display='none'
        restartGame()
    }

    mokeponChoiceEnemy()
    
}

function mokeponChoiceEnemy () {

    

    let mokeponAleatorio = aleatorio(1, 3)

    if(mokeponAleatorio == 1) {
        //Letizio
        mokeponEnemyPlayer.innerHTML = 'Letezio'
    }else if (mokeponAleatorio == 2) {
        //Ganjus
        mokeponEnemyPlayer.innerHTML = 'Ganjus'
    }else {
        //Enisgas
        mokeponEnemyPlayer.innerHTML = 'Enisgas'   
    }
}

function fireAttack () {
    playerAttack = 'FIRE'
    enemyAttackAleatorio()
}

function waterAttack () {
    playerAttack = 'WATER'
    enemyAttackAleatorio()
}

function plantAttack () {
    playerAttack = 'PLANT'
    enemyAttackAleatorio()
}


function enemyAttackAleatorio () {

    let attackAleatorio = aleatorio(1, 3)

    if (attackAleatorio == 1) {
        enemyAttack = 'FIRE'
    }else if (attackAleatorio == 2) {
        enemyAttack = 'WATER'
    }else {
        enemyAttack = 'PLANT'
    }

    combat()
}

function combat () {

    if(playerAttack == enemyAttack) {

        createMessage('Tie')

    } else if((playerAttack == 'FIRE' && enemyAttack == 'PLANT') || (playerAttack == 'WATER' && enemyAttack == 'FIRE') || (playerAttack == 'PLANT' && enemyAttack == 'WATER')){

        createMessage('You win')

        mokeponEnemyLife--
    
        checklifes()
       
    
    } else {

        createMessage('You lose')
     
        mokeponPlayerLife--
    
        checklifes()
       

    }

}

function checklifes () {


    let spanMokeponPlayerLife = document.querySelector('#mokepon-player-life')
    let spanMokeponEnemyLife = document.querySelector('#mokepon-enemy-life')
    let playerMokeponStatus = document.querySelector('#player-mokepon')
    let enemyMokeponStatus = document.querySelector('#enemy-mokepon')
    let finalResultGame = document.querySelector('#final-result-game')


    spanMokeponEnemyLife.innerHTML = mokeponEnemyLife
    spanMokeponPlayerLife.innerHTML = mokeponPlayerLife

    if(mokeponEnemyLife == 0) {
        enemyMokeponStatus.innerHTML = 'Il mokepon nemico è morto !'
        finalResultGame.innerHTML = 'HAI VINTO IL COMBATTIMENTO !!!'
        combatAgain.style.display = 'block'
        buttonsDisabled()
        restartButtonGame()

    } else if(mokeponPlayerLife == 0) {
        playerMokeponStatus.innerHTML = 'Il tuo mokepon è morto !'
        finalResultGame.innerHTML = 'HAI PERSO IL COMBATTIMENTO COGLIONE!'
        combatAgain.style.display = 'block'
        buttonsDisabled()
        restartButtonGame()
    }
}


function createMessage (resultCombat) {
    let sectionMessage = document.querySelector('#messaggi')
    
    let message = document.createElement('p')
    let messageRisult = document.createElement('p')
    message.innerHTML = `Il tuo mokepon usa ${playerAttack}. Il mokepon enemico usa ${enemyAttack}`


    messageRisult.innerHTML = resultCombat


    sectionMessage.appendChild(message)
    sectionMessage.appendChild(messageRisult)
}


function restartButtonGame () {


    restartButton.innerText = 'RestartGame'

    combatAgain.appendChild(restartButton)
    restartButton.addEventListener('click', restartGame)


}

function restartGame () {
    location.reload()
}

function buttonsDisabled () {
    btnFire.disabled = 'true'
    btnWater.disabled = 'true'
    btnPlant.disabled = 'true'
}


//funzione che ritorna un numero intero compreso tra un min e un max
function aleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}