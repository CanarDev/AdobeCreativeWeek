var buttonVal = 0
let paraph = document.querySelector(".ChangingText")
const buttonSpan = document.querySelector('.buttontext > span')
const button = document.querySelector('.buttontext')

function nextParaph() {
    buttonVal = buttonVal += 1
    console.log(buttonVal)
    if (buttonVal == 1) {
        paraph.innerHTML = "VOICI L'HISTOIRE D'UN VOYAGEUR DE L'ESPACE.<br><br> PAUL VIENT D'ARRIVER DANS L'UNIVERS DE L'EE-M ET CHERCHE À EMMÉNAGER SUR L'UNE DES CINQ PLANETES."
        buttonSpan.innerHTML = "Suivant"
    }
    if (buttonVal == 2) {
        paraph.innerHTML = "CHAQUE PLANETE EST DIFFERENTE, ELLES ONT TOUTES LEURS HABITUDES, LEURS LOGIQUES ET LEURS MENTALITÉS.<br><br> HEUREUSEMENT CES MÊMES PLANÈTES METTENT À DISPOSITION UNE MULTITUDE D'ÉNIGMES POUR AIGUILLER LES VOYAGEURS DANS LEURS CHOIX."
    }
    if (buttonVal == 3) {
        paraph.innerHTML = "PAUL NE VEUT PAS SE TROMPER, POUR CELA IL DEVRA ACCOMPLIR LES ÉNIGMES DES 5 PLANETES.<br><br>UNE FOIS CES ÉPREUVES ACCOMPLIES, PAUL DEVRA RENTRER LE CODE DE LA PLANÈTE DE SON CHOIX ET DÉCOUVRIRA LES SECRETS DE CELLE-CI."
        buttonSpan.innerHTML = "Commencer"
    }
    if (buttonVal == 4) {
        //TODO Popup "open the game"
        button.href = "javascript:runProgram()"
    }
}