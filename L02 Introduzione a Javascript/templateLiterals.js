/*
Scrivi una funzione generaMessaggio che accetti tre parametri:

nome (stringa): il nome della persona
prodotto (stringa): il nome di un prodotto acquistato
prezzo (numero): il prezzo del prodotto
La funzione deve restituire una stringa formattata usando i Template Literals, ad esempio:
*/

function generaMessaggio(nome, prodotto, prezzo) {
    console.log(`Ciao ${nome}! Grazie per aver acquistato ${prodotto}. L'importo totale è di €${prezzo}.`)
}

generaMessaggio("Peppe", "calzino", "120.22");

function evidenzia(strings, ...values) {
    let newStringMapped = strings.map((str, i) => `${str} <strong>${values[i] || ""}</strong>`);
    console.log("Stringa mappa:");
    console.log(newStringMapped);

    let newStringJoined = newStringMapped.join("");
    console.log("Stringa dopo join():");
    console.log(newStringJoined);
    
    let newStringCleared = newStringJoined.replace(/<strong>\s*<\/strong>/g, "");
    return newStringCleared;
}

const nome = "John";
const eta = 30;
const output = evidenzia`Mi chiamo ${nome} e ho ${eta} anni.`;

console.log(output);
