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
const sectionMessage = document.querySelector('#messaggi')
const endGameResults = document.querySelector('.end-game-results')
const combatAgain = document.querySelector('#combat-again')

const playerMoke = document.querySelector('#player-moke')
const enemyMoke = document.querySelector('#enemy-moke')


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
        playerMoke.src = '../img/mokepons_mokepon_hipodoge_attack.png'
        mokeponPlayer.innerHTML = mokepon1
    }else if (inputGanjus.checked) {
        playerMoke.src = '../img/mokepons_mokepon_capipepo_attack.png'
        mokeponPlayer.innerHTML =  mokepon2
    }else if (inputEnisgas.checked) {
        playerMoke.src = '../img/mokepons_mokepon_ratigueya_attack.png'
        mokeponPlayer.innerHTML = mokepon3
    }else {

        alert('Scegli un Mokepon altrimenti devi andarci tu!')
        attackSelect.style.display='none'
        restartGame()
    }

    mokeponChoiceEnemy()
    
}

function mokeponChoiceEnemy () {
    endGameResults.style.display = 'none'
    sectionMessage.style.display = 'none'

    let mokeponAleatorio = aleatorio(1, 3)

    if(mokeponAleatorio == 1) {
        //Letizio
        enemyMoke.src = '../img/mokepons_mokepon_hipodoge_attack.png'
        mokeponEnemyPlayer.innerHTML = mokepon1
    }else if (mokeponAleatorio == 2) {
        //Ganjus
        enemyMoke.src = '../img/mokepons_mokepon_capipepo_attack.png'
        mokeponEnemyPlayer.innerHTML = mokepon2
    }else {
        //Enisgas
        enemyMoke.src = '../img/mokepons_mokepon_ratigueya_attack.png'
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

    sectionMessage.style.display= 'grid'

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


    let choiceMokeponTitle = document.querySelector('.battle-init--title')
    let spanMokeponPlayerLife = document.querySelector('#mokepon-player-life')
    let spanMokeponEnemyLife = document.querySelector('#mokepon-enemy-life')
    let playerMokeponStatus = document.querySelector('#player-mokepon')
    let finalResultGame = document.querySelector('#final-result-game')


    spanMokeponEnemyLife.innerHTML = mokeponEnemyLife
    spanMokeponPlayerLife.innerHTML = mokeponPlayerLife

    if(mokeponEnemyLife == 0) {
        playerMokeponStatus.innerHTML = 'Il Mokepon nemico è MORTO !'
        finalResultGame.innerHTML = 'HAI VINTO IL COMBATTIMENTO!!!'
        endGameResults.style.display = 'flex'
        choiceMokeponTitle.style.display = 'none'
        combatAgain.style.display = 'block'
        buttonsDisabled()
        restartButtonGame()

    } else if(mokeponPlayerLife == 0) {
        playerMokeponStatus.innerHTML = 'Il tuo Mokepon è MORTO !'
        finalResultGame.innerHTML = 'HAI PERSO IL COMBATTIMENTO!!!'
        endGameResults.style.display = 'flex'
        choiceMokeponTitle.style.display = 'none'
        combatAgain.style.display = 'block'
        buttonsDisabled()
        restartButtonGame()
    }
}


function createMessage (resultCombat) {
    
    
    let message = document.querySelector('#player')
    let message2 = document.querySelector('#player2')
    let messageRisult = document.querySelector('#winner')
   
    if(mokeponPlayer.textContent == mokepon1 && mokeponEnemyPlayer.textContent == mokepon2) {
        message.innerHTML = `Il tuo <img src="../img/mokepons_mokepon_hipodoge_attack.png"> usa ${playerAttack}`
        message2.innerHTML = `Il <img src="../img/mokepons_mokepon_capipepo_attack.png"> nemico usa ${enemyAttack}`
       
    }else if(mokeponPlayer.textContent == mokepon2 && mokeponEnemyPlayer.textContent == mokepon3) {
        message.innerHTML = `Il tuo <img src="../img/mokepons_mokepon_capipepo_attack.png"> usa ${playerAttack}`
        message2.innerHTML = `Il <img src="../img/mokepons_mokepon_ratigueya_attack.png"> nemico usa ${enemyAttack}`
       
       
    }else if(mokeponPlayer.textContent == mokepon3 && mokeponEnemyPlayer.textContent == mokepon1) {
        message.innerHTML = `Il tuo <img src="../img/mokepons_mokepon_ratigueya_attack.png"> usa ${playerAttack}`
        message2.innerHTML = `Il <img src="../img/mokepons_mokepon_hipodoge_attack.png"> nemico usa ${enemyAttack}`


    }else if(mokeponPlayer.textContent == mokepon2 && mokeponEnemyPlayer.textContent == mokepon1) {
        message.innerHTML = `Il tuo <img src="../img/mokepons_mokepon_capipepo_attack.png"> usa ${playerAttack}`
        message2.innerHTML = `Il <img src="../img/mokepons_mokepon_hipodoge_attack.png"> nemico usa ${enemyAttack}`

    }else if(mokeponPlayer.textContent == mokepon3 && mokeponEnemyPlayer.textContent == mokepon2) {
        message.innerHTML = `Il tuo <img src="../img/mokepons_mokepon_ratigueya_attack.png"> usa ${playerAttack}`
        message2.innerHTML = `Il <img src="../img/mokepons_mokepon_capipepo_attack.png"> nemico usa ${enemyAttack}`

    }else if(mokeponPlayer.textContent == mokepon1 && mokeponEnemyPlayer.textContent == mokepon3) {
        message.innerHTML = `Il tuo <img src="../img/mokepons_mokepon_hipodoge_attack.png"> usa ${playerAttack}`
        message2.innerHTML = `Il <img src="../img/mokepons_mokepon_ratigueya_attack.png"> nemico usa ${enemyAttack}`

    } else {

        if(mokeponPlayer.textContent == mokepon1 && mokeponEnemyPlayer.textContent == 'Hypodoge'){
            message.innerHTML = `Il tuo <img src="../img/mokepons_mokepon_hipodoge_attack.png"> usa ${playerAttack}`
            message2.innerHTML = `Il <img src="../img/mokepons_mokepon_hipodoge_attack.png"> nemico usa ${enemyAttack}`        
        }else if (mokeponPlayer.textContent == mokepon2 && mokeponEnemyPlayer.textContent == 'Capipepo'){
            message.innerHTML = `Il tuo <img src="../img/mokepons_mokepon_capipepo_attack.png"> usa ${playerAttack}`
            message2.innerHTML = `Il <img src="../img/mokepons_mokepon_capipepo_attack.png"> nemico usa ${enemyAttack}`        
        }else if(mokeponPlayer.textContent == mokepon3 && mokeponEnemyPlayer.textContent == 'Ratigueya') {
            message.innerHTML = `Il tuo <img src="../img/mokepons_mokepon_ratigueya_attack.png"> usa ${playerAttack}`
            message2.innerHTML = `Il <img src="../img/mokepons_mokepon_ratigueya_attack.png"> nemico usa ${enemyAttack}`        
        }
    }
    

    messageRisult.innerHTML = resultCombat

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