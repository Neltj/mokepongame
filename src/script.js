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


const mokepon1 = 'Hypodoge'
const mokepon2 = 'Capipepo'
const mokepon3 = 'Ratigueya'

let playerAttack
let enemyAttack
let resultCombat
let mokeponPlayerLife = 5
let mokeponEnemyLife = 5


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
        mokeponPlayer.innerHTML = mokepon1
    }else if (inputGanjus.checked) {
        mokeponPlayer.innerHTML =  mokepon2
    }else if (inputEnisgas.checked) {
        mokeponPlayer.innerHTML = mokepon3
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
        mokeponEnemyPlayer.innerHTML = mokepon1
    }else if (mokeponAleatorio == 2) {
        //Ganjus
        mokeponEnemyPlayer.innerHTML = mokepon2
    }else {
        //Enisgas
        mokeponEnemyPlayer.innerHTML = mokepon3
    }
}

function fireAttack () {
    playerAttack = '🔥'
    enemyAttackAleatorio()
}

function waterAttack () {
    playerAttack = '💧'
    enemyAttackAleatorio()
}

function plantAttack () {
    playerAttack = '🌿'
    enemyAttackAleatorio()
}


function enemyAttackAleatorio () {

    let attackAleatorio = aleatorio(1, 3)

    if (attackAleatorio == 1) {
        enemyAttack = '🔥'
    }else if (attackAleatorio == 2) {
        enemyAttack = '💧'
    }else {
        enemyAttack = '🌿'
    }

    combat()
}

function combat () {

    if(playerAttack == enemyAttack) {

        createMessage('Pareggio🤍')

    } else if((playerAttack == '🔥' && enemyAttack == '🌿') || (playerAttack == '💧' && enemyAttack == '🔥') || (playerAttack == '🌿' && enemyAttack == '💧')){

        createMessage('Hai vinto!💘')

        mokeponEnemyLife--
    
        checklifes()
       
    
    } else {

        createMessage('Hai perso!💔')
     
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
    let message2 = document.createElement('p')
    let messageRisult = document.createElement('p')
    message.classList.add('player')
    message2.classList.add('player')
    messageRisult.classList.add('winner')

    if(mokeponPlayer.textContent == mokepon1 && mokeponEnemyPlayer.textContent == mokepon2) {
        message.innerHTML = `IL tuo <img src="../img/mokepons_mokepon_hipodoge_attack.png"> usa ${playerAttack}`
        message2.innerHTML = `IL <img src="../img/mokepons_mokepon_capipepo_attack.png"> usa ${enemyAttack}`
       
       
    }else if(mokeponPlayer.textContent == mokepon2 && mokeponEnemyPlayer.textContent == mokepon3) {
        message.innerHTML = `IL tuo <img src="../img/mokepons_mokepon_capipepo_attack.png"> usa ${playerAttack}`
        message2.innerHTML = `IL <img src="../img/mokepons_mokepon_ratigueya_attack.png"> usa ${enemyAttack}`
       
       
    }else if(mokeponPlayer.textContent == mokepon3 && mokeponEnemyPlayer.textContent == mokepon1) {
        message.innerHTML = `IL tuo <img src="../img/mokepons_mokepon_ratigueya_attack.png"> usa ${playerAttack}`
        message2.innerHTML = `IL <img src="../img/mokepons_mokepon_hipodoge_attack.png"> usa ${enemyAttack}`

    }else if(mokeponPlayer.textContent == mokeponEnemyPlayer.textContent) {

        message.innerHTML = `Il tuo ${mokeponPlayer.textContent} usa ${playerAttack}.`
        message2.innerHTML = `Il ${mokeponEnemyPlayer.textContent} nemico usa ${enemyAttack}.`     
    }
    

    messageRisult.innerHTML = resultCombat


    sectionMessage.appendChild(message)
    sectionMessage.appendChild(message2)
    sectionMessage.appendChild(messageRisult)
}


function restartButtonGame () {

    restartButton.classList.add('btn-restart-game')
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