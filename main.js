let tailleGrille = 3
let etatJeu = []
let joueurActuel = "X"
let jeuActif = false
let numberK = 3
const scores = { X: 0, O: 0 }

function demarrerJeu() {
    const boutonCreerGrille = document.getElementById("createGrid")
    const boutonRecommencer = document.getElementById("restartGame")
    const boutonResetScores = document.getElementById("resetScores")
    const inputTaille = document.getElementById("gridSize")
    const inputK = document.getElementById("gridK")
    const boutonCreerK = document.getElementById("creatK")

    boutonCreerGrille.addEventListener("click", creerGrille)
    boutonRecommencer.addEventListener("click", recommencerJeu)
    boutonResetScores.addEventListener("click", resetScores)
    boutonCreerK.addEventListener("click", definirK)

    inputTaille.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            creerGrille()
        }
    })
    inputK.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            definirK()
        }
    })
}

function definirK() {
    const inputK = document.getElementById("gridK")
    const valeurK = Number.parseInt(inputK.value)

    if (valeurK < 3 || valeurK > 10) {
        alert("Veuillez entrer une valeur entre 3 et 10")
        return
    }

    if (valeurK > tailleGrille) {
        alert("K ne peux pas etre superieure à la taille de la grille")
        return
    }

    numberK = valeurK
    ///////numberk nombre de cases alignées pour gagner

}

function creerGrille() {
    const inputTaille = document.getElementById("gridSize")
    const taille = Number.parseInt(inputTaille.value)

    if (taille < 3 || taille > 10) {
        alert("Veuillez entrer une taille entre 3 et 10")
        return
    }

    tailleGrille = taille
    etatJeu = []

    for (let i = 0; i < taille * taille; i++) {
        etatJeu.push("")
    }

    joueurActuel = "X"
    jeuActif = true

    dessinerGrille()
    mettreAJourStatus("Tour du joueur " + joueurActuel)
    mettreAJourIndicateurTour()
}

function dessinerGrille() {
    const plateau = document.getElementById("board")
    plateau.innerHTML = ""

    plateau.style.gridTemplateColumns = "repeat(" + tailleGrille + ", 1fr)"

    const taillePlateau = Math.min(400, window.innerWidth - 100)
    const tailleCase = Math.floor(taillePlateau / tailleGrille) - 5

    for (let i = 0; i < tailleGrille * tailleGrille; i++) {
        const case_element = document.createElement("div")
        case_element.classList.add("square")
        case_element.style.width = tailleCase + "px"
        case_element.style.height = tailleCase + "px"
        case_element.style.fontSize = Math.max(16, tailleCase * 0.4) + "px"

        case_element.setAttribute("data-index", i)

        case_element.addEventListener("click", () => {
            clicSurCase(i)
        })

        plateau.appendChild(case_element)
    }
}

function clicSurCase(index) {
    if (etatJeu[index] !== "" || !jeuActif) {
        return
    }

    etatJeu[index] = joueurActuel

    const cases = document.querySelectorAll(".square")
    const case_cliquee = cases[index]
    case_cliquee.textContent = joueurActuel
    case_cliquee.classList.add(joueurActuel.toLowerCase())

    if (verifierVictoire()) {
        jeuActif = false
        mettreAJourStatus(" Congratulation " + joueurActuel + "🎉")
        const status = document.getElementById("status")
        status.classList.add("winner")

        scores[joueurActuel]++
        mettreAJourScores()
        return
    }

    if (verifierMatchNul()) {
        jeuActif = false
        mettreAJourStatus("Draw Match 🤝")
        const status = document.getElementById("status")
        status.classList.add("draw")
        return
    }

    changerJoueur()
}

function verifierVictoire() {
    const combinaisonsGagnantes = creerCombinaisonsGagnantes()

    for (let i = 0; i < combinaisonsGagnantes.length; i++) {
        const combinaison = combinaisonsGagnantes[i]
        const premierSymbole = etatJeu[combinaison[0]]

        if (premierSymbole === "") {
            continue
        }

        let victoire = true
        for (let j = 0; j < combinaison.length; j++) {
            if (etatJeu[combinaison[j]] !== premierSymbole) {
                victoire = false
                break
            }
        }

        if (victoire) {
            return true
        }
    }

    return false

    // khsni nzid number k hna
}

function creerCombinaisonsGagnantes() {
    const combinaisons = []

    for (let ligne = 0; ligne < tailleGrille; ligne++) {
        const combinaisonLigne = []
        for (let colonne = 0; colonne < tailleGrille; colonne++) {
            combinaisonLigne.push(ligne * tailleGrille + colonne)
        }
        combinaisons.push(combinaisonLigne)
    }

    for (let colonne = 0; colonne < tailleGrille; colonne++) {
        const combinaisonColonne = []
        for (let ligne = 0; ligne < tailleGrille; ligne++) {
            combinaisonColonne.push(ligne * tailleGrille + colonne)
        }
        combinaisons.push(combinaisonColonne)
    }

    const diagonalePrincipale = []
    for (let i = 0; i < tailleGrille; i++) {
        diagonalePrincipale.push(i * tailleGrille + i)
    }
    combinaisons.push(diagonalePrincipale)

    const diagonaleSecondaire = []
    for (let i = 0; i < tailleGrille; i++) {
        diagonaleSecondaire.push(i * tailleGrille + (tailleGrille - 1 - i))
    }
    combinaisons.push(diagonaleSecondaire)

    return combinaisons
}

function verifierMatchNul() {
    for (let i = 0; i < etatJeu.length; i++) {
        if (etatJeu[i] === "") {
            return false
        }
    }
    return true
}

function changerJoueur() {
    if (joueurActuel === "X") {
        joueurActuel = "O"
    } else {
        joueurActuel = "X"
    }

    mettreAJourStatus("Tour du joueur " + joueurActuel)
    mettreAJourIndicateurTour()
}

function mettreAJourStatus(message) {
    const status = document.getElementById("status")
    status.textContent = message
    status.classList.remove("winner", "draw")
}

function mettreAJourIndicateurTour() {
    const indicateur = document.querySelector(".turn-indicator")
    indicateur.textContent = "Tour de " + joueurActuel
}

function mettreAJourScores() {
    document.getElementById("scoreX").textContent = scores.X
    document.getElementById("scoreO").textContent = scores.O
}

function recommencerJeu() {
    if (etatJeu.length === 0) {
        return
    }

    for (let i = 0; i < etatJeu.length; i++) {
        etatJeu[i] = ""
    }

    joueurActuel = "X"
    jeuActif = true

    const cases = document.querySelectorAll(".square")
    for (let i = 0; i < cases.length; i++) {
        cases[i].textContent = ""
        cases[i].classList.remove("x", "o")
    }

    mettreAJourStatus("Tour du joueur " + joueurActuel)
    mettreAJourIndicateurTour()
}

function resetScores() {
    scores.X = 0
    scores.O = 0
    mettreAJourScores()
}

document.addEventListener("DOMContentLoaded", demarrerJeu)
