const enigma1 = document.querySelectorAll('.SocialNumber')
const validate = document.querySelector('.validateEnigma')
const validateTwo = document.querySelector('.validateEnigmaTwo')


var manyTimes = 0
if (validate) {
    validate.addEventListener("click", () => {
        manyTimes += 1
        console.log(enigma1[1].value)
        if (enigma1[0].value === "b") {
            if (enigma1[1].value === "c") {
                if (enigma1[2].value === "a") {
                    alert("Tu as trouvé la bonne combinaison !! dommage que tu t'y soit prit à " + manyTimes + " fois")
                    validate.href = "/humano-enigma3.html"
                }else{
                    alert("Mauvaise réponse ! tu peux réessayer ;)")
                }
            }else{
                alert("Mauvaise réponse ! tu peux réessayer ;)")
            }
            
        } else{
            alert("Mauvaise réponse ! tu peux réessayer ;)")
        }
    })
}

const enigma4 = document.querySelectorAll('.personnasTransport > img')

if (enigma4) {
    enigma4.forEach(box => {
        box.addEventListener("click", () => {
            if (box.classList.contains('borderSelected')) {
                enigma4.forEach(resetborder => {
                    resetborder.classList.remove('borderSelected')
                    resetborder.setAttribute("aria-checked", "false");
                })
            }
            else {
                enigma4.forEach(resetborder => {
                    resetborder.classList.remove('borderSelected')
                    resetborder.setAttribute("aria-checked", "false");
                })
                box.classList.add('borderSelected')
                box.setAttribute("aria-checked", "true");
            }
        })
    });
}

if (validateTwo) {
    validateTwo.addEventListener("click", () => {
        if (enigma4[0].getAttribute("aria-checked") === "true") {
            alert("Stephane arrivera désormais à l'heure au travail ! Bien joué  !!")
            validateTwo.href = "/humano-enigma5.html"
        }
        else{
            alert("Mauvaise réponse ! tu peux réessayer ;)")
        }
    })
}

function ContinueToTheGame() {
    alert('Retourner sur le jeu')
    localStorage.setItem('humano', 'finished');
}