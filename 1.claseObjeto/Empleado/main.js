//definir la clase Celular

class Empleado {
  constructor(trabajo,horario,edad,sexo,tiempo) {
    this.trabajo = trabajo
    this.horario = horario
    this.edad = edad
    this.sexo = sexo
    this.tiempo = tiempo
    this.info = `<h1 class="">Informacion del Empleado Con la ocupacion: ${this.trabajo} <br>
        Horario: ${this.horario} <br> Edad: ${this.edad} <br> Sexo: ${this.sexo} <br> Tiempo en la empresa: ${this.tiempo}  <br><h1>`;
  }

  showInfo() {
    document.write(this.info);
  }

  trabajar() {
      document.write(
        `<h1 class="h1 fs-3">El emplado esta Trabajando!...<br> <hr><h1>`
      );
  }
  descansar(){
    document.write(
      `<h1 class="h1 fs-3">El Empleado esta Descansando!...<br> <hr><h1>`
    );
  }
}
let Empleado1=new Empleado("Contador","Normal","34 años","Hombre","4 años") 
let Empleado2=new Empleado("Diseñadora","Normal","22 años","Mujer","3 meses")
let Empleado3=new Empleado("Guardia","Nocturno","32 años","Hombre","10 años")


Empleado1.showInfo();
Empleado1.trabajar();

Empleado2.showInfo();
Empleado2.descansar();

Empleado3.showInfo();
Empleado3.descansar();
