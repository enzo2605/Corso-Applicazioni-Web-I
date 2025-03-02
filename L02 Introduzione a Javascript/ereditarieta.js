class Widget {
    constructor(id, x, y) {
        this.id = id;
        this.setPosition(x, y);
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }
}

class TextBox extends Widget {
    constructor(id, x, y, width, height) {
        super(id, x, y);
        this.width = width;
        this.height = height;
    }

    setSize(width, height) {
        this.width = width;
        this.height = height;
    }
}

let widget = new Widget(1, 10, 11);
let textBox = new TextBox(1, 10, 11, 100, 200);

class Veicolo {
    constructor(modello, targa) {
        this.modello = modello;
        this.targa = targa;
    }
}

class Automobile extends Veicolo {
    constructor(modello, targa) {
        super(modello, targa);
    }

    guida() {
        console.log("Guido una macchina");
    }
}

class Motocicletta extends Veicolo {
    constructor(modello, targa) {
        super(modello, targa);
    }

    guida() {
        console.log("Guido una motocicletta");
    }
}

class VeicoloBuilder {
    static buildVeicolo(tipoVeicolo) {
        if (tipoVeicolo === "auto") {
            return new Veicolo()
        } else if (tipoVeicolo === "moto") {
            return new Motocicletta();
        }
    }
}

function main() {
    let auto = new Automobile("Panda", "CT35EW");
    console.log("auto: " + auto);
    auto.guida();
    auto = VeicoloBuilder.buildVeicolo("moto");
    console.log("auto: " + auto);
    auto.guida();
}

main();