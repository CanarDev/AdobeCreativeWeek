const topInput = document.querySelector('.Top')
const leftInput = document.querySelector('.Left')
const key = document.getElementById('key')
const validate = document.querySelector('.validateEnigma')
const validatTwo = document.querySelector('.validateEnigmaTwo')


if (topInput) {
    topInput.addEventListener('change', (e) => {
        key.style.top = topInput.value + "px"
    
    })
}

if (leftInput) {
    leftInput.addEventListener('change', (e) => {
        key.style.left = leftInput.value + "px"
    })
}

if (validate) {
    var manyTimes = 0
    validate.addEventListener("click", (e) => {
        manyTimes += 1
        console.log(topInput.value)
        if (topInput.value == 400) {
            if (leftInput.value == 550) {
                alert("Tu as trouvé dévérouillé la serrure au bout de " + manyTimes + " fois!!")
                validate.href = "/mathemos-enigma3.html"
            }
            else{
                alert("Il ne te reste plus qu'a avancer la clef !")
            }
        }
        else{
            alert("Mauvaise réponse ! tu peux réessayer ;)")
        }
    })
}

const fullstack = document.querySelector('.fullstack')

if (fullstack) {
    fullstack.addEventListener('change', () => {
        if (fullstack.value == "fullstack") {
            alert("Tu as trouvé le mot secret !! Félicitation !")
            validatTwo.href = "/mathemos-enigma5.html"
        }
    })
}

function ContinueToTheGame() {
    alert('Retourner sur le jeu')
    localStorage.setItem('mathemos', 'finished');
}

