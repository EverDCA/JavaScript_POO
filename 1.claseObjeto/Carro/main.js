//definir la clase Celular

class Carro {
  constructor(marca,traccion,modelo,peso,vmax) {
    this.marca = marca
    this.traccion = traccion
    this.modelo = modelo
    this.peso = peso
    this.vmax = vmax
    this.info = `<h1 class="">Informacion del Carro ${this.marca} <br>
        Peso: ${this.peso} <br> traccion: ${this.traccion} <br> Modelo: ${this.modelo} <br> Velocidad maxima: ${this.vmax}  <br><h1>`;
  }

  showInfo() {
    document.write(this.info);
  }

  encender() {
      document.write(
        `<h1 class="h1 fs-3">El Carro ${this.marca} esta Encendido!...<br> <hr><h1>`
      );
  }
  apagar(){
    document.write(
      `<h1 class="h1 fs-3">El Carro ${this.marca} esta Apagado!...<br> <hr><h1>`
    );
  }
}

let Carro1=new Carro("Toyota","Trasera","2018","1000kg","280kh") 
let Carro2=new Carro("Lamborghini","Trasera","2022","1200kg","300kh")
let Carro3=new Carro("Tesla","Ambas","2024","1400kg","200kh")

Carro1.showInfo();
Carro1.encender();

Carro2.showInfo();
Carro2.apagar();

Carro3.showInfo();
Carro3.encender();
