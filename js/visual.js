var buttonVal = 0
let paraph = document.querySelector(".ChangingText")
const buttonSpan = document.querySelector('.buttontext > span')
const button = document.querySelector('.buttontext')
const validate = document.querySelector('.validateEnigma')

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
// design enigma
const boxesVisualKFC = document.querySelectorAll('.containerKFCBox > .boxColor')

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

const enigma1visual = 2

validate.addEventListener("click", () => {
    if (boxesVisualKFC[1].getAttribute("aria-checked") === "true") {
        console.log("gg")
    }
})

