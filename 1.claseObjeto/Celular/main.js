//definir la clase Celular

class Celular {
  constructor(marca, bateria, nombre, imei, camara) {
    this.marca = marca;
    this.bateria = bateria;
    this.nombre = nombre;
    this.imei = imei;
    this.camara = camara;
    this.info = `<h1 class="">Informacion del celular ${this.nombre} <br>
        Bateria: ${this.bateria} <br> Marca: ${this.marca} <br> Imei: ${this.imei} <br> Camara: ${this.camara}  <br><h1>`;
  }

  showInfo() {
    document.write(this.info);
  }

  turnOn() {
    let encender = parseInt(prompt("Ingrese la carga del celular: "));
    if (encender > 0) {
      document.write(
        `<h1 class="h1 fs-3">El celular ${this.nombre} Encendio Correctamente...<br> <hr><h1>`
      );
    } else {
      document.write(
        `<h1 class="h2 fs-3">El celular ${this.nombre} No Pudo Encender...<br><h1>`)
    }
  }
}

let celular1 = new Celular(
  "Huawei",
  "4500mAh",
  "Huawei p30",
  "302212191",
  "98px"
);
let celular2 = new Celular(
  "Samsung",
  "5000mAh",
  "Samsung S22+",
  "198393891",
  "64mpx"
);
let celular3 = new Celular(
  "Samsung",
  "3000mAh",
  "Samsung J2",
  "1922389264",
  "12px"
);

celular1.showInfo();
celular1.turnOn();

celular2.showInfo();
celular2.turnOn();

celular3.showInfo();
celular3.turnOn();
