const topInput = document.querySelector('.Top')
const leftInput = document.querySelector('.Left')
const key = document.getElementById('key')
const validate = document.querySelector('.validateEnigma')


topInput.addEventListener('change', (e) => {
    key.style.top = topInput.value + "px"

})

leftInput.addEventListener('change', (e) => {
    key.style.left = leftInput.value + "px"
})

if (validate) {
    var manyTimes = 0
    validate.addEventListener("click", (e) => {
        manyTimes += 1
        console.log(topInput.value)
        if (topInput.value == 400) {
            if (leftInput.value == 550) {
                alert("Tu as trouvé dévérouillé la serrure au bout de " + manyTimes + " fois!!")
                validateThree.href = "/mathemos-enigma3.html"
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