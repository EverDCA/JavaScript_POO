class Aprendiz {
    constructor(nombres, apellidos, cedula, sexo) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.cedula = cedula;
        this.sexo = sexo;
        this.formacion = prompt("Programa de formación: ");
        this.regional = prompt("Regional: ");
    }

    showInfo() {
        document.write(`<h3>Hola soy un aprendiz SENA!:</h3>
                        <p>${this.nombres} ${this.apellidos}</p>
                        <p>CC: ${this.cedula}</p>
                        <p>Sexo: ${this.sexo}</p>
                        <p>Estudiante del programa: ${this.formacion} de la regional ${this.regional}</p><br>`);
    }
}

class Instructor {
    constructor(nombres, apellidos, cedula, area) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.cedula = cedula;
        this.area = area;
    }

    showInfo() {
        document.write(`<h3>Hola soy un Instructor SENA!:</h3>
                        <p>${this.nombres} ${this.apellidos}</p>
                        <p>CC: ${this.cedula}</p>
                        <p>Área de instrucción: ${this.area}</p><br>`);
    }
}

class Coordinador {
    constructor(nombres, apellidos, cedula, departamento) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.cedula = cedula;
        this.departamento = departamento;
    }

    showInfo() {
        document.write(`<h3>Hola soy un Coordinador SENA!:</h3>
                        <p>${this.nombres} ${this.apellidos}</p>
                        <p>CC: ${this.cedula}</p>
                        <p>Departamento: ${this.departamento}</p><br>`);
    }
}

function showInformation(persona) {
    persona.showInfo();
}

let Aprendiz1 = new Aprendiz("Samuel Elias", "Lastre Paternina", "2313546548", "Masculino");
let Instructor1 = new Instructor("Stefania", "Tamara", "65564823", "Inglés");
let Coordinador1 = new Coordinador("Carlos", "Martinez", "13246598", "Recursos Humanos");

showInformation(Aprendiz1);
showInformation(Instructor1);
showInformation(Coordinador1);
