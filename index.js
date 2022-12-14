// Author: SynnK
// Date: 06/11/2022
// Language: JavaScript

// Function to make RNG steps easier
function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
} 

let num = 0

// 1.2s interval so each question can be loaded
let chute = setInterval(() => {
    // Selects a random RadioButton
    document.getElementsByClassName('caed-radio-option')[randomNumber(0,document.getElementsByClassName("caed-radio-option").length)].click()

    // Iterate between 4 buttons
    for (let i = 0; i < 3; i++) {
        if (document.getElementsByClassName('btn caed-form-botao')[i].textContent === 'Próximo >') {
            document.getElementsByClassName('btn caed-form-botao')[i].click()
        } else if (document.getElementsByClassName('btn caed-form-botao')[i].textContent === 'Finalizar') {
            document.getElementsByClassName('btn caed-form-botao')[i].click()
        }
    }

    num++

    // 26 has 4 options and u need to click on "Finalizar".
    if (num === 25) {
        clearInterval(chute)
    }

}, 1200) 
