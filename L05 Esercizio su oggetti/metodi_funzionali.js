let a = [1, 2, 3, 4, 5];
console.log("Array: " + a);

let everyGreaterThanZero = a.every((x) => x > 0);
console.log("Tutti i valori maggiori di 0: " + everyGreaterThanZero);

let everyEven = a.every((x) => x % 2 == 0);
console.log("Tutti i valori pari: " + everyEven);

let someGreaterThanZero = a.some((x) => x > 0);
console.log("Alcuni valori maggiori di 0: " + someGreaterThanZero);

let someEven = a.some((x) => x % 2 == 0);
console.log("Alcuni valori pari: " + someEven);

const b = a.map((x) => x * 2);
console.log("Array moltiplicato per 2: " + b);

const c = a.filter(x => x < 3);
console.log("Array con valori minori di 3: " + c);

const d = a.reduce((acc, x) => acc + x, 0);
console.log("Somma degli elementi: " + d);