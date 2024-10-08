class Perro {
    constructor(raza, edad, nombre) {
        this.raza = raza;
        this.edad = edad;
        this.nombre = nombre;
    }

    sonido() {
        document.write(`<h3>Perro</h3>
            <p>El perro ${this.nombre} de raza ${this.raza} hace: ¡Guau Guau!</p><br>`);
    }
}

class Gato {
    constructor(raza, edad, nombre) {
        this.raza = raza;
        this.edad = edad;
        this.nombre = nombre;
    }

    sonido() {
        document.write(`<h3>Gato</h3>
            <p>El gato ${this.nombre} de raza ${this.raza} hace: ¡Miau Miau!</p><br>`);
    }
}

class Pajaro {
    constructor(especie, edad, nombre) {
        this.especie = especie;
        this.edad = edad;
        this.nombre = nombre;
    }

    sonido() {
        document.write(`<h3>
            Pajaro</h3>
            <p>El pájaro ${this.nombre} de especie ${this.especie} hace: ¡Pío Pío!</p><br>`);
    }
}

function emitirSonido(animal) {
    animal.sonido();
}

// Ejemplo de uso
let perro1 = new Perro("FreshPuddle", 3, "Milo");
let gato1 = new Gato("Siamés", 2, "Megatron");
let pajaro1 = new Pajaro("Perico", 1, "Insano");

emitirSonido(perro1);
emitirSonido(gato1);
emitirSonido(pajaro1);
