"use strict";

/* Variabili */
var c = 7; // posso ridefinire la variabile c

/* Aggiunte in ES6 */
let a = 5; // la variabile a non può essere ridefinita da nessun'altra parte
const b = 6; // la variabile b non può essere modificata

// non funziona in strict mode
//d = 6;

// Const
const s = []
//array = [1, 2, 3]

console.log(s); // non si può fare, sto riassegnando ad una variabile costante un nuovo valore

console.log("e: " + e); // non si può fare, la variabile e non è stata ancora dichiarata
var e = 2;

const obj = { x: 1, y: 2, z: 3 };
for (let single in obj) {
    console.log(single);
}

const array = [1, 2, 3];
for (let single of array) {
    console.log(single);
}