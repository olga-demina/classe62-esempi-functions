// Dato un'array vuoto, chiedere all'utente di inserire un nuovo numero finchè l'array non ha 3 elementi.
// Nell'array non devono esserci duplicati.

const userNumbers = [];

while (userNumbers.length < 3) {
    const thisNumber = parseInt(prompt("Dimmi un numero")); 
                
    if ( !isElementInArray(userNumbers, thisNumber) ) {
        userNumbers.push(thisNumber);
    }
}

console.log(userNumbers);


const products = ["mela", "latte", "pane"];

const userProduct = prompt("Dimmi quale prodotto stai cercando");

if (isElementInArray(products, userProduct)) {
    alert("Abbiamo questo prodotto. Lo vuoi ordinare?")
} else {
    alert("Mi dispiace, ma questo prodotto è finito. Ritorna domani!");
}



// FUNCTIONS
/**
 * Description this function checks if element is presenter in an array
 * @param {Array} arrayToCheck -> the array for element search
 * @param {any} elementToCheck -> the element to search in array
 * @returns {Boolean} true if element is in array, otherwise false
 */


function isElementInArray(arrayToCheck, elementToCheck) {
    // Dichiarare le varibili che ci servono
    let elementFound = false;

    // COntrollo se l'elemente è presente
    for (let i = 0; i < arrayToCheck.length; i++) {
        const thisElement = arrayToCheck[i]; 
        if (thisElement === elementToCheck) { 
            elementFound = true;
        }
    }

    // Output della funzione (return)
    return elementFound; 
}

// TEST (per verificare il funzionamento della funzione passo per passo. Alla fine lo cancello)
// 
// let myArray = [1,2,3];
// const result = isElementInArray(myArray, 2);
// console.log(result);
