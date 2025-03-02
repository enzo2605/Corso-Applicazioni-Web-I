const numbers = [10, 20, 30, 40, 50];

console.log("Destructoring Array #1: Estrai i primi tre numeri dall'array e assegnali a variabili first, second, e third.");
let [first, second] = numbers;
console.log(first);
console.log(second);

console.log("Destructoring Array #2: swapping");
let x = 1;
let y = 2;
[x, y] = [y, x]
console.log(x);
console.log(y);

const person = {
    name: 'Bob',
    age: 25,
    address: {
        city: 'Los Angeles',
        state: 'CA'
    }
};

console.log("Destructoring Object #1: Estrai la proprietà name dall'oggetto person e assegnala a una variabile fullName");
let { name: fullname } = person;
console.log(fullname);

console.log("Destructoring Object #2: Estrai la città e lo stato dall'oggetto person e assegnali a variabili city e state.");
let { address: { city, state } } = person;
console.log(city);
console.log(state);

console.log("Destructoring Object #3: Estrai la proprietà age dall'oggetto person e assegnala a una variabile personAge, ma specifica un valore predefinito di 30 se la proprietà non esiste.");
let { age: personAge = 30 } = person;
console.log(personAge);