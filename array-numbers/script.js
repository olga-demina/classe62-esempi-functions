// numeri random: generare 10 numeri random (con un for o con un while) attraverso una funzione (copiamola da w3schools) e stamparli a schermo

let counter = 0;
while (counter < 10) {
    const generatedNumber = generateRndInteger(1, 100);
    console.log(generatedNumber);
    counter++;
}


// FUNCTIONS
/**
 * Description This JavaScript function always returns a random integer between min and max (both included)
 * @param {Number} min -> the minimum limit for random number
 * @param {Number} max -> the maximum limit for random number
 * @returns {NUmber} -> random number between min and max
 */
//                          1     100
function generateRndInteger(min, max) {
    // L'algoritmo per generare il numero random
    const randNumber = Math.floor(Math.random() * (max - min + 1) ) + min; // 77
    return randNumber; // 77
}