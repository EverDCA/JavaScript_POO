class Electronico {
    constructor(modelo, marca, procesador) {
        this.modelo = modelo;
        this.marca = marca;
        this.procesador = procesador;
        this.ram = parseInt(prompt("Ingrese la RAM que desea para su Electrónico (GB):"));
    }

    registrar() {
        document.write("------------------------------------------<br>");
        document.write(`<div class="alert alert-success">El registro del Electronico fue un éxito<br></div>`);
        document.write("------------------------------------------<br>");
        document.write(`Tu Electrónico es del modelo ${this.modelo}<br>`);
        document.write(`De la marca ${this.marca}<br>`);
        document.write(`Del procesador ${this.procesador}<br>`);
        document.write(`Con la RAM de el Electrónico de: ${this.ram} GB<br>`);
    }
}

class Laptop extends Electronico {
    constructor(modelo, marca, procesador, disco_duro) {
        super(modelo, marca, procesador);
        this.disco_duro = disco_duro;
        this.duracion_bateria = prompt("Ingrese la duración de la batería de su Laptop:");
    }

    encender() {
        this.bateria = parseInt(prompt("Ingrese en cuánto está la batería de su Laptop (en %):"));
        if (this.bateria > 0) {
            document.write("Tu Laptop tiene la batería suficiente para encender.<br>");
        } else {
            document.write("Tu Laptop no tiene la batería suficiente para encender.<br>");
        }
    }
}

const Laptop1 = new Laptop("2021", "Hp", "Ryzen 5 4600h", "512 gb");
Laptop1.encender();
Laptop1.registrar();
