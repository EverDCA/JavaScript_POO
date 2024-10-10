class FormaGeometrica {
    // Método abstracto
    calcularArea() {
        throw new Error("Este método debe ser implementado por la subclase");
    }
}

class Cuadrado extends FormaGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    calcularArea() {
        return this.lado ** 2;
    }
}

class Circulo extends FormaGeometrica {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * (this.radio ** 2);
    }
}

// Uso de las clases
const cuadrado = new Cuadrado(5);
const circulo = new Circulo(3);

// Mostrar el resultado con alert-success de Bootstrap
document.write(`
    <div class="alert alert-success" role="alert">
        Área del cuadrado: ${cuadrado.calcularArea()}
    </div>
    <div class="alert alert-success" role="alert">
        Área del círculo: ${circulo.calcularArea()}
    </div>
`);