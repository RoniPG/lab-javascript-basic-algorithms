// Iteration 1: Names and Input

const hacker1= "Nombre";
console.log(`The driver's name is ${hacker1}`);
const hacker2="Chrome";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long name, ${hacker1.length} caracters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}

// Iteration 3: 

let aux3a= ""
for (let i = 0; i < hacker1.length; i++) {
    aux3a +=`${hacker1[i]} `
}
console.log(aux3a);
let aux3b= ""
for (let i = hacker2.length - 1; i >= 0 ; i--) {
    aux3b +=`${hacker2[i]}`
}
console.log(aux3b);

/**  3.3 Order the strings depending on the lexicographic value
 * 
 * Para realizar este ejercicio hay multiples formas de realizarlo,
 * 1.- En javascript el '<' (menor que) y '>' (mayor que) automaticamente compara y ordena los strings
 *  por su valor lexicografico
 * 2.- Introduciendo los dos strings en un array y utilizando el metodo sort() ordena los strings lexicograficamente
 * 3.- Crear una const con todas las letras del abecedario.
 * 
 * Vamos a implementar la primera y la ultima solucion (case sensitive)
*/

if (hacker1 < hacker2) {
    console.log(`The driver's name goes first.`);

} else if (hacker2 < hacker1) {
    console.log(`Yo, the navigator goes first, definitely.`);

} else {
    console.log(`What?! You both have the same name?`);

}
// Comparando manualmente(case insensitive)

const abecedario= "abcdefghijklmnopqrs"

//Funcion que devuelve la palabara mas larga

function findLogestoword(word1 , word2){
    if (word1.length < word2.length) {
        return word2.length
    } else if (word2.length < word1.length) {
        return word1.length
    } else {
        return word1.length
    }
}

//Recorremos las palabras para compararlas

for (let i = 0; i < findLogestoword(hacker1, hacker2); i++) {
   
    if (abecedario.indexOf(hacker2[i]) === undefined || 
    abecedario.indexOf(hacker1[i].toLowerCase()) < abecedario.indexOf(hacker2[i].toLowerCase())) {
        console.log(`The driver's name goes first.`);
        break;
    } else if (abecedario.indexOf(hacker1[i]) === undefined || 
    abecedario.indexOf(hacker2[i].toLowerCase()) < abecedario.indexOf(hacker1[i].toLowerCase())) {
        console.log(`Yo, the navigator goes first, definitely.`);
        break;
    } else if (i === findLogestoword(hacker1, hacker2) -1) {
        console.log(`What?! You both have the same name?`);
        
    }
}

