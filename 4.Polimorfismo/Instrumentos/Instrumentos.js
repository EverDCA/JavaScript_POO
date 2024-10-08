class Guitarra {
    constructor(marca, cuerdas) {
        this.marca = marca;
        this.cuerdas = cuerdas;
    }

    tocar() {
        document.write(`<h3>Guitarra</h3>
            <p>Informacion del instrumento:</p>
                        <p>La guitarra de marca ${this.marca} tiene ${this.cuerdas} cuerdas y produce un sonido Metalicoo!.</p>`);
    }
}

class Piano {
    constructor(marca, teclas) {
        this.marca = marca;
        this.teclas = teclas;
    }

    tocar() {
        document.write(`<h3>Piano</h3>
            <p>Informacion del instrumento:</p>
                        <p>El piano de marca ${this.marca} tiene ${this.teclas} teclas y produce un sonido Armonioso.</p>`);
    }
}

class Trompeta {
    constructor(marca, tipo) {
        this.marca = marca;
        this.tipo = tipo;
    }

    tocar() {
        document.write(`<h3>Trompeta</h3>
            <p>Informacion del instrumento:</p>
                        <p>La trompeta de marca ${this.marca} es del tipo ${this.tipo} y produce un sonido Cultural.</p>`);
    }
}

function tocarInstrumento(instrumento) {
    instrumento.tocar();
}

let guitarra1 = new Guitarra("Fender", 6);
let piano1 = new Piano("Yamaha", 88);
let trompeta1 = new Trompeta("Bach", "Bb");

tocarInstrumento(guitarra1);
tocarInstrumento(piano1);
tocarInstrumento(trompeta1);
