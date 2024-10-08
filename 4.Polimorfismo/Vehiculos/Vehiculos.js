class Carro {
    constructor(marca, vmax, modelo, color, tipo) {
        this.marca = marca;
        this.vmax = vmax;
        this.modelo = modelo;
        this.color = color;
        this.tipo = tipo;
    }

    showInfo() {
        document.write(`<h3>Informacion Del Carro!:</h3>
                        <p>Marca: ${this.marca}, Velocidad Maxima: ${this.vmax}</p>
                        <p>Modelo: ${this.modelo}</p>
                        <p>Color: ${this.color}</p>
                        <p>Tipo: ${this.tipo}</p>`);
    }
}

class Moto {
    constructor(marca, vmax, modelo, color, tipo) {
        this.marca = marca;
        this.vmax = vmax;
        this.modelo = modelo;
        this.color = color;
        this.tipo = tipo;
    }

    showInfo() {
        document.write(`<h3>Informacion De la Moto!:</h3>
                        <p>Marca: ${this.marca}, Velocidad Maxima: ${this.vmax}</p>
                        <p>Modelo: ${this.modelo}</p>
                        <p>Color: ${this.color}</p>
                        <p>Tipo: ${this.tipo}</p>`);
    }
}

class Bicicleta {
    constructor(marca, vmax, modelo, color, tipo) {
        this.marca = marca;
        this.vmax = vmax;
        this.modelo = modelo;
        this.color = color;
        this.tipo = tipo;
    }

    showInfo() {
        document.write(`<h3>Informacion De la Bicicleta!:</h3>
                        <p>Marca: ${this.marca}, Velocidad Maxima: ${this.vmax}</p>
                        <p>Modelo: ${this.modelo}</p>
                        <p>Color: ${this.color}</p>
                        <p>Tipo: ${this.tipo}</p>`);
    }
}

function showInformation(vehiculo) {
    vehiculo.showInfo();
}

let carro1 = new Carro("Toyota", "280km/h", "2018", "Negro", "Deportivo");
let moto1 = new Moto("Yamaha", "240km/h", "2021", "Azul", "Naked");
let bicicleta1 = new Bicicleta("Mountain", "100km/h", "2022", "Amarillo", "Montaña");

showInformation(carro1);
showInformation(moto1);
showInformation(bicicleta1);
