class Dispositivo {
  constructor(marca, modelo, año) {
      this.marca = marca;
      this.modelo = modelo;
      this.año = año;
      this.capacidad = parseInt(prompt("Ingrese la capacidad de batería de su Dispositivo (mAh):"));
  }

  registrar() {
      document.write("------------------------------------------<br>");
      document.write(`<div class="alert alert-success">El registro del Dispositivo fue un éxito<br></div>`);
      document.write("------------------------------------------<br>");
      document.write(`Tu Dispositivo de la marca ${this.marca}<br>`);
      document.write(`De modelo ${this.modelo}<br>`);
      document.write(`Del año ${this.año}<br>`);
      document.write(`Con la capacidad de batería ${this.capacidad} mAh<br>`);
  }
}

class Smartphone extends Dispositivo {
  constructor(marca, modelo, año, os) {
      super(marca, modelo, año);
      this.os = os;
      this.conectividad = prompt("Ingrese el tipo de conectividad que tiene el Smartphone:");
  }

  conectividades() {
      document.write(`La conectividad de su ${this.modelo} es de ${this.conectividad}<br>`);
  }

  encender() {
      this.bateria = parseInt(prompt("Ingrese en cuánto está la batería del teléfono (en mAh):"));
      if (this.bateria > 0) {
          document.write("Tu Smartphone está conectado y puede encender.<br>");
      } else {
          document.write("Tu Smartphone no puede encender.<br>");
      }
  }
}

const Smartphone1 = new Smartphone("Samsung", "S24 +", 2024, "Android");
Smartphone1.conectividades();
Smartphone1.registrar();
Smartphone1.encender();
