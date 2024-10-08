//definir la clase Celular

class Moto {
  constructor(marca,modelo,peso,vmax,torque) {
    this.marca = marca
    this.modelo = modelo
    this.peso = peso
    this.vmax = vmax
    this.torque = torque
    this.info = `<h1 class="">Informacion de la moto ${this.marca} <br>
        Peso: ${this.peso} <br> Torque: ${this.torque} <br> Modelo: ${this.modelo} <br> Velocidad maxima: ${this.vmax}  <br><h1>`;
  }

  showInfo() {
    document.write(this.info);
  }

  encender() {
      document.write(
        `<h1 class="h1 fs-3">La moto ${this.marca} esta Encendida!...<br> <hr><h1>`
      );
  }
  apagar(){
    document.write(
      `<h1 class="h1 fs-3">La moto ${this.marca} esta Apagada!...<br> <hr><h1>`
    );
  }
}

let moto1=new Moto("Biwi","2016","98kg","80kh","8.2Nm") 
let moto2=new Moto("Yamaha","2022","99kg","120kh","12Nm")
let moto3=new Moto("Honda","2008","69kg","70kh","8Nm")

moto1.showInfo();
moto1.encender();

moto2.showInfo();
moto2.apagar();

moto3.showInfo();
moto3.encender();
