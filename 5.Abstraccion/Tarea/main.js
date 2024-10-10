class TareaEmpleado {
    // Método abstracto
    realizarTarea() {
        throw new Error("Este método debe ser implementado por la subclase");
    }

    showDetails() {
        throw new Error("Este método debe ser implementado por la subclase");
    }
}

class Ingeniero extends TareaEmpleado {
    constructor(nombre, apellido, proyecto) {
        super();
        this.nombre = nombre;
        this.apellido = apellido;
        this.proyecto = proyecto;
    }

    realizarTarea() {
        document.write(`
            <div class="alert alert-success" role="alert">
                La Ingeniera ${this.nombre} está diseñando el proyecto ${this.proyecto}.
            </div>
        `);
    }

    showDetails() {
        document.write(`
            <div class="alert alert-info" role="alert">
                Nombre: ${this.nombre}<br>
                Apellido: ${this.apellido}<br>
                Proyecto actual: ${this.proyecto}
            </div>
        `);
    }
}

class Doctor extends TareaEmpleado {
    constructor(nombre, apellido, especialidad) {
        super();
        this.nombre = nombre;
        this.apellido = apellido;
        this.especialidad = especialidad;
    }

    realizarTarea() {
        document.write(`
            <div class="alert alert-success" role="alert">
                El Doctor ${this.nombre} está tratando pacientes en la especialidad de ${this.especialidad}.
            </div>
        `);
    }

    showDetails() {
        document.write(`
            <div class="alert alert-info" role="alert">
                Nombre: ${this.nombre}<br>
                Apellido: ${this.apellido}<br>
                Especialidad: ${this.especialidad}
            </div>
        `);
    }
}

// Creación de objetos y ejecución de métodos
const ingeniero1 = new Ingeniero("Ana", "Gómez", "Puente Sincelejito");
ingeniero1.realizarTarea();
ingeniero1.showDetails();

const doctor1 = new Doctor("Carlos", "Ruiz", "Cardiología");
doctor1.realizarTarea();
doctor1.showDetails();
