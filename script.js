// Esercizio 1

// Esercizio 1 con for 
// let somma = 0;
// for(let i = 0; i<5; i++) {
//     somma += parseInt(prompt("inserisci numero"));
// }
// console.log(somma)


// Esercizio 1 con while
// let i= 0;
// let somma = 0;

// while (i<5) {
//     somma += parseInt(prompt("inserisci numero"));
//     i++;
// }

// console.log(somma)

// --------------------------------------------------- 

// Esercizio 2

// let parola1 = prompt("Inserisci prima parola");
// let parola2 = prompt("Inserisci seconda parola ");

// if (parola1.length == parola2.length) {
//     console.log("prima parola: " + parola1) 
//     console.log("seconda parola: " + parola2);
// }
// else if ( parola1.length > parola2.length) {
//     console.log("parola più lunga: " + parola1);
// }
// else if ( parola1.length < parola2.length) {
//     console.log("parola più lunga: " + parola2);
// }

// --------------------------------------------------- 

// Esercizio 3 
let i = 2;
let k = 2;
while (k <= 1000) {
    console.log(k);
    k = Math.pow(2, i);
    i++
}
