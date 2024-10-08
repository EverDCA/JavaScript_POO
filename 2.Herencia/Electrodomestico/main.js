class Electrodomestico {
  constructor(marca, color, capacidad) {
    this.marca = marca;
    this.color = color;
    this.capacidad = capacidad;
    this.consumo = parseInt(
      prompt("Ingrese el consumo de su Electrodoméstico (kWh):")
    );
  }

  registrar() {
    document.write(
      "------------------------------------------<br>" +
        `<div class="alert alert-success">El registro del Electrodomestico fue un éxito<br></div>` +
        "------------------------------------------<br>" +
        `Tu electrodoméstico de la marca ${this.marca}<br>` +
        `De color ${this.color}<br>` +
        `De capacidad ${this.capacidad} kg<br>` +
        `Con el consumo de energía ${this.consumo} kWh<br>`
    );
  }
}

class Refrigerador extends Electrodomestico {
  constructor(marca, color, capacidad, tipo) {
    super(marca, color, capacidad);
    this.tipo = tipo;
    this.temperatura = parseInt(
      prompt("Ingrese la temperatura de su refrigerador:")
    );
  }

  encender() {
    this.energia = true;
    if (this.energia) {
      document.write("Tu refrigerador está conectado y puede encender.<br>");
    } else {
      document.write("Tu refrigerador no puede encender.<br>");
    }
  }

  medidorTemperatura() {
    if (this.temperatura >= 2 && this.temperatura <= 8) {
      document.write(`La temperatura de ${this.temperatura}°C es normal.<br>`);
    } else {
      document.write(
        `Revisa tu refrigerador, tiene una temperatura de ${this.temperatura}°C y puede dejar de funcionar.<br>`
      );
    }
  }
}

const nevera1 = new Refrigerador("Samsung", "Plateado", 2, "Frost");
nevera1.registrar();
nevera1.encender();
nevera1.medidorTemperatura();
