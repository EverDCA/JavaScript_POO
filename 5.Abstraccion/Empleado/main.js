class Empleado {
    // Método abstracto
    calcularSalario() {
        throw new Error("Este método debe ser implementado por la subclase");
    }
    showDetails() {
        throw new Error("Este método debe ser implementado por la subclase");
    }
}

class EmpleadoPorTiempoCompleto extends Empleado {
    constructor(nombre, apellido, faltas) {
        super();
        this.nombre = nombre;
        this.apellido = apellido;
        this.faltas = faltas;
        this.cargo = prompt(
            "Ingrese Su Cargo:\n" +
            "1. Manager\n" +
            "2. Empleado\n" +
            "3. Admin"
        ).toUpperCase();
    }

    calcularSalario() {
        let salarioBase;
        if (this.cargo === "MANAGER") {
            salarioBase = 5000000;
        } else if (this.cargo === "EMPLEADO") {
            salarioBase = 2000000;
        } else if (this.cargo === "ADMIN") {
            salarioBase = 4000000;
        } else {
            document.write("<div class='alert alert-danger'>Error, Valor no válido...</div>");
            return;
        }

        const descuento = salarioBase * (this.faltas / 100);
        const salarioFinal = salarioBase - descuento;

        document.write(`
            <div class="alert alert-success" role="alert">
                Cargo: ${this.cargo}<br>
                Su salario es de: ${salarioFinal} $pesos<br>
                Se descontaron: ${descuento} $pesos por sus ${this.faltas} faltas
            </div>
        `);
    }

    showDetails() {
        document.write(`
            <div class="alert alert-info" role="alert">
                Nombre: ${this.nombre}<br>
                Apellido: ${this.apellido}<br>
                Cargo: ${this.cargo}<br>
                Faltas: ${this.faltas}
            </div>
        `);
    }
}

class EmpleadoPorHoras extends Empleado {
    constructor(nombre, apellido, faltas) {
        super();
        this.nombre = nombre;
        this.apellido = apellido;
        this.faltas = faltas;
    }

    calcularSalario() {
        let horas = 0;
        for (let i = 1; i <= 4; i++) {
            const horasSemanales = parseInt(prompt(`Ingrese las horas trabajadas en la semana ${i}:`), 10);
            horas += horasSemanales;
        }

        const salario = 7000 * horas;
        const descuento = salario * (this.faltas / 100);
        const salarioFinal = salario - descuento;

        document.write(`
            <div class="alert alert-success" role="alert">
                Su salario es de: ${salarioFinal} $pesos<br>
                Se descontaron ${descuento} $pesos por sus ${this.faltas} faltas
            </div>
        `);
    }

    showDetails() {
        document.write(`
            <div class="alert alert-info" role="alert">
                Nombre: ${this.nombre}<br>
                Apellido: ${this.apellido}<br>
                Faltas: ${this.faltas}
            </div>
        `);
    }
}

// Uso de las clases
const empleadoPorTiempoCompleto1 = new EmpleadoPorTiempoCompleto("Ever", "Canchano", 2);
empleadoPorTiempoCompleto1.calcularSalario();
empleadoPorTiempoCompleto1.showDetails();

const empleadoPorHoras1 = new EmpleadoPorHoras("Samuel", "Lastre", 4);
empleadoPorHoras1.calcularSalario();
empleadoPorHoras1.showDetails();