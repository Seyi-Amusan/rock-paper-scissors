const rulesContainer = document.querySelector('.rules-bg')
const options = document.querySelectorAll('.option-gradient-bg')
const playGround = document.querySelector('#before-choice')
const resultGround = document.querySelector('#after-choice')
const userChoiceContainer = document.querySelector('.user-choice')
const houseChoiceContainer = document.querySelector('.house-choice')
let result = document.querySelector('.result')
let score = document.querySelector('.score')
let userChoice, houseChoice = null


const getHouseChoice = () => {
    let randomNumber = Math.floor(Math.random() * 5);
    return options[randomNumber].cloneNode(true)
}

const displayResult = (userChoice, houseChoice) => {
    if (userChoice.querySelector('div img').src == houseChoice.querySelector('div img').src) {
        result.textContent = 'you win'
        score.textContent = parseInt(score.textContent) + 1
    } else {
        result.textContent = 'you lose'
        if (parseInt(score.textContent) > 0) {
            score.textContent = parseInt(score.textContent) - 1
        }
    }
    return
}


for (const option of options) {
    option.addEventListener('click', (event) => {

        //store players choice
        userChoice = event.currentTarget.cloneNode(true)
        houseChoice = getHouseChoice()

        //insert user choice in result ground
        userChoiceContainer.appendChild(userChoice)
        
        //insert house choice in result ground
        houseChoiceContainer.appendChild(houseChoice)

        //display result ground
        playGround.style.display = 'none'
        resultGround.style.display = 'flex'

        displayResult(userChoice, houseChoice)
        
    })
}


document.querySelector('.play-again').addEventListener('click', () => {
    //display play ground again
    resultGround.style.display = 'none'
    playGround.style.display = 'grid'

    //clear the result ground
    userChoiceContainer.removeChild(userChoiceContainer.lastElementChild)
    houseChoiceContainer.removeChild(houseChoiceContainer.lastElementChild)
})

//toggle rules modal
document.querySelector('.close-icon').addEventListener('click', () => rulesContainer.style.display = 'none')
document.querySelector('.rules-btn').addEventListener('click', () => rulesContainer.style.display = 'flex')

