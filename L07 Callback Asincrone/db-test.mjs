import sqlite from 'sqlite3';

// Connessione al database
const db = new sqlite.Database("questions.sqlite", (err) => {
    if (err) {
        console.error("Errore nell'apertura del database", err.message);
    } else {
        console.log("Connesso al database");
    }
});

// Leggo tutte le risposte
let sql = "SELECT * FROM answer";
let results = [];
db.all(sql, [], (err, rows) => {
    if (err) {
        throw err;
    } else {
        rows.forEach(row => {
            //console.log(row);
            results.push(row);
        });
    }
});

// Non stampa nulla perché la query è asincrona. Quindi l'array results è vuoto
for (let r of results) {
    console.log(r);
}