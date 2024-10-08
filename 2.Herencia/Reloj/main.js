class Reloj {
    constructor(tipo, marca, material) {
        this.tipo = tipo;
        this.marca = marca;
        this.material = material;
        this.precio = parseInt(prompt("Ingrese el precio que desea para su Reloj:"));
    }

    registrar() {
        document.write("------------------------------------------<br>");
        document.write(`<div class="alert alert-success">El registro del Reloj fue un éxito<br></div>`);
        document.write("------------------------------------------<br>");
        document.write(`Tu Reloj es del tipo ${this.tipo}<br>`);
        document.write(`De la marca ${this.marca}<br>`);
        document.write(`Del material ${this.material}<br>`);
        document.write(`Con el precio de: $${this.precio}<br>`);
    }
}

class SmartWatch extends Reloj {
    constructor(tipo, marca, material, pantalla) {
        super(tipo, marca, material);
        this.pantalla = pantalla;
        this.duracionBateria = prompt("Ingrese la duración de la batería de su SmartWatch:");
    }

    encender() {
        this.bateria = parseInt(prompt("Ingrese cuánta batería tiene su SmartWatch:"));
        if (this.bateria > 0) {
            document.write("Comprobando que su dispositivo tenga la batería suficiente para encender...<br>");
            document.write("Tu SmartWatch tiene la batería suficiente para prender.<br>");
        } else {
            document.write("Tu SmartWatch no tiene la batería suficiente para encender.<br>");
        }
    }
}

const SmartWatch1 = new SmartWatch("Deportivo", "Apple", "Acero", "OLED");
SmartWatch1.encender();
SmartWatch1.registrar();
