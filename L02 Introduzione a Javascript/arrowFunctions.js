const Classe = {
    studenti: ["Alice", "Bob", "Marco"],

    stampaStudenti: function() {
        console.log("Lista studenti");
        setTimeout(() => {
            this.studenti.forEach((studente) => {
                console.log(studente);
            })
        }, 2000);
    }
}

Classe.stampaStudenti();
