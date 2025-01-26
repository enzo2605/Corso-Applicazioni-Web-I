"use strict";

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    print() {
        console.log(this.x, this.y);
    }
}

let p = new Point(1, 2);
p.print(); // 1 2

const movie = {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
    duration: 175,
    print: function () {
        console.log(this.title, this.director, this.year);
    }
};

movie.director = "Martin Scorsese";

movie.print(); // The Godfather Martin Scorsese 1972

console.log("Movie in"); 
for (const prop in movie) {
    console.log(prop, movie[prop]);
}

// Copia le proprietà di movie in titanic
const titanic = Object.assign({}, movie);
console.log(titanic);

// Aggiunge la proprietà rating a titanic
const titanic2 = Object.assign(titanic, { rating: 9.5 });
console.log(titanic2);

const improvedMovie = Object.assign({}, movie, { cast: ["Marlon Brando", "Al Pacino", "James Caan"] });
console.log(improvedMovie);

console.log(titanic);

const titanic3 = { ...titanic, budget: "200 milion" };
console.log(titanic3);