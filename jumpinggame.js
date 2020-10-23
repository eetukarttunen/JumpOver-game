/**
 * @ Eetu Karttunen
 * Version 2.0
 * Google Chrome - type jumping game ("Eetu's Jumping game")
 * Jump over the tree (green rectangle)
 * The character is a purple square
 * JavaScript + CSS + HTML
 * 
 */

// Määrittelyt: laatikko, puu, laskuri
const laatikko = document.getElementById("laatikko")
const puu = document.getElementById("puu")
var counter=0;

// Funktio hyppy luominen
function hyppy() {
    if(laatikko.classList != ("hyppy")) {
        laatikko.classList.add("hyppy");
        
        setTimeout(function () {
            // poistetaan näkyvistä
            laatikko.classList.remove("hyppy");
        }, 300);
    }
}

let isAlive = setInterval(function (){
    // hahmon Y asento
    let laatikkoTop = parseInt(window.getComputedStyle(laatikko).getPropertyValue("top"));
    // Puun X asento
    let puuLeft = parseInt(window.getComputedStyle(puu).getPropertyValue("left"));
    
    // Ehdot, jotta saamme eroteltua, kerkesikö hypätä puun yli
    if(puuLeft < 50 && puuLeft > 0 && laatikkoTop >= 140) {
        alert("Game over, better luck next time") // huomio 
        counter=0;
    }else{
        counter++; // jos pääsi yli, lisätään pisteet laskuriin
        document.getElementById("pisteytys").innerHTML = Math.floor(counter/100);
    }
}, 10);

// mikä vain nappi näppäimistöstä käy pelin pelaamiseen
document.addEventListener("keydown", function (event) {
    hyppy();
});