var buttonVal = 0
let paraph = document.querySelector(".ChangingText")
const buttonSpan = document.querySelector('.buttontext > span')
const button = document.querySelector('.buttontext')
const validate = document.querySelector('.validateEnigma')
const validateTwo = document.querySelector('.validateEnigmaTwo')
const validateThree = document.querySelector('.validateEnigmaThree')

function nextParaph() {
    buttonVal = buttonVal += 1
    console.log(buttonVal)
    if (buttonVal == 1) {
        paraph.innerHTML = "Tout d'abord, chez nous, nous adorons la coloration! Fais-tu partie de notre patrie ?"
        buttonSpan.innerHTML = "Commencer"
    }
    if (buttonVal == 2) {
        button.href = "/visual-enigma.html"
    }
}

// Enigma part
// design enigma KFC
const boxesVisualKFC = document.querySelectorAll('.containerKFCBox > .boxColor')

if (boxesVisualKFC) {
    boxesVisualKFC.forEach(box => {
        box.addEventListener("click", () => {
            if (box.classList.contains('borderSelected')) {
                boxesVisualKFC.forEach(resetborder => {
                    resetborder.classList.remove('borderSelected')
                    resetborder.setAttribute("aria-checked", "false");
                })
            }
            else {
                boxesVisualKFC.forEach(resetborder => {
                    resetborder.classList.remove('borderSelected')
                    resetborder.setAttribute("aria-checked", "false");
                })
                box.classList.add('borderSelected')
                box.setAttribute("aria-checked", "true");
            }
        })
    });
}

const cocas = document.querySelectorAll('.containerCoca > img')
if (cocas) {
    cocas.forEach(coca => {
        coca.addEventListener("click", () => {
            if (coca.classList.contains('borderSelected')) {
                cocas.forEach(resetborder => {
                    resetborder.classList.remove('borderSelected')
                    resetborder.setAttribute("aria-checked", "false");
                })
            }
            else {
                cocas.forEach(resetborder => {
                    resetborder.classList.remove('borderSelected')
                    resetborder.setAttribute("aria-checked", "false");
                })
                coca.classList.add('borderSelected')
                coca.setAttribute("aria-checked", "true");
            }
        })
    });
}

const chupas = document.querySelectorAll('.Chupacontainer > p')
if (chupas) {
    chupas.forEach(chupa => {
        chupa.addEventListener("click", () => {
            if (chupa.classList.contains('borderSelected')) {
                chupas.forEach(resetborder => {
                    resetborder.classList.remove('borderSelected')
                    resetborder.setAttribute("aria-checked", "false");
                })
            }
            else {
                chupas.forEach(resetborder => {
                    resetborder.classList.remove('borderSelected')
                    resetborder.setAttribute("aria-checked", "false");
                })
                chupa.classList.add('borderSelected')
                chupa.setAttribute("aria-checked", "true");
            }
        })
    });
}

var manyTimes = 0
if (validate) {
    validate.addEventListener("click", (e) => {
        manyTimes += 1
        if (boxesVisualKFC[1].getAttribute("aria-checked") === "true") {
            alert("Tu as trouvé la bonne couleur !! dommage que tu t'y soit prit à " + manyTimes + " fois")
            validate.href = "/visual-enigma2.html"
        } else if (cocas[0].getAttribute("aria-checked") === "true") {
            alert("Tu as trouvé le bon logo !!")
            validate.href = "/visual-enigma2.html"
        }
        else{
            alert("Mauvaise réponse ! tu peux réessayer ;)")
        }
    })
}

if (validateTwo) {
    validateTwo.addEventListener("click", (e) => {
        if (cocas[0].getAttribute("aria-checked") === "true") {
            alert("Tu as trouvé le bon logo !!")
            validateTwo.href = "/visual-enigma4.html"
        }
        else{
            alert("Mauvaise réponse ! tu peux réessayer ;)")
        }
    })
}

if (validateThree) {
    validateThree.addEventListener("click", (e) => {
        manyTimes += 1
        if (chupas[0].getAttribute("aria-checked") === "true") {
            alert("Tu as trouvé le bon logo au bout de la " + manyTimes + " !!")
            validateThree.href = "/visual-enigma6.html"
        }
        else{
            alert("Mauvaise réponse ! tu peux réessayer ;)")
        }
    })
}

function ContinueToTheGame() {
    alert('Retourner sur le jeu')
    localStorage.setItem('visual', 'finished');
}