let v = [1, 2, 3, 4, 5];

console.log(v[0]);
console.log(v.length);

// Assegnazione puntatore ad alias
let v2 = [1, 2, 3, 4, 5];
let alias = v2;
console.log("Alias");
console.log(alias[0]);

// Copia di v3 in alias2
let v3 = [1, 2, 3, 4, 5];
console.log("Array.from:");
let alias2 = Array.from(v3);
console.log(alias2);

// destructuring assignment
let [x, y] = [1, 2];
console.log("destructuring assignment:");
console.log(x);
console.log(y);

// Swap
[x, y] = [y, x];
console.log("Swap:");
console.log(x);
console.log(y);

function returnArray() {
    return [1, 2, 3];
}
let [a, b] = returnArray();
console.log("Return Array:");
console.log(a);
console.log(b);

// Spread operator
let [d, ...e] = [1, 2, 3, 4, 5];
console.log("Spread operator:");
console.log(d);
console.log(e);

console.log("Spread operator 2:");
const parts = ['shoulders', 'knees'];
const lyrics = ['head', ...parts, 'and', 'toes'];
console.log(lyrics);

console.log("Spread di una stringa");
let stringa = 'Ciao a tutti';
let charArray = [...stringa];
console.log(charArray);