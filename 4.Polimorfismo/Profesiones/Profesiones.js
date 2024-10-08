class Medico {
    constructor(especialidad, experiencia) {
        this.especialidad = especialidad;
        this.experiencia = experiencia;
    }

    trabajar() {
        document.write(`<h3>Informacion Del/la Medico:</h3>
                        <p>El médico especializado en ${this.especialidad} con ${this.experiencia} años de experiencia trata a sus pacientes con cuidado!.</p>`);
    }
}

class Ingeniero {
    constructor(ingenieria, experiencia) {
        this.ingenieria = ingenieria;
        this.experiencia = experiencia;
    }

    trabajar() {
        document.write(`<h3>Informacion del/la Ingeniero/a:</h3>
                        <p>El ingeniero de la rama ${this.ingenieria} con ${this.experiencia} años de experiencia es muy apto!.</p>`);
    }
}

class Docente {
    constructor(materia, experiencia) {
        this.materia = materia;
        this.experiencia = experiencia;
    }

    trabajar() {
        document.write(`<h3>Informacion del/la Docente:</h3>
                        <p>El docente de ${this.materia} con ${this.experiencia} años de experiencia enseña muy bien a sus aprendices.</p>`);
    }
}

function trabajarProfesional(profesional) {
    profesional.trabajar();
}

let medico1 = new Medico("Cardiologo", 10);
let ingeniero1 = new Ingeniero("Informatico", 5);
let docente1 = new Docente("Matemáticas", 8);

trabajarProfesional(medico1);
trabajarProfesional(ingeniero1);
trabajarProfesional(docente1);
