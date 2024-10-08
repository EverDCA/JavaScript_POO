//definir la clase Celular

class Animal {
  constructor(peso,nombre,escosistema,patas,tamaño) {
    this.peso = peso
    this.nombre = nombre
    this.ecosistema = escosistema
    this.patas = patas
    this.tamaño = tamaño
    this.info = `<h1 class="">Informacion del Animal ${this.nombre} <br>
        Peso: ${this.peso} <br> Ecosistema: ${this.ecosistema} <br> Numero de patas: ${this.patas} <br> Tamaño: ${this.tamaño}  <br><h1>`;
  }

  showInfo() {
    document.write(this.info);
  }

  comer() {
      document.write(
        `<h1 class="h1 fs-3">El Animal ${this.nombre} esta Comiendo!...<br> <hr><h1>`
      );
  }
  correr(){
    document.write(
      `<h1 class="h1 fs-3">El Animal ${this.nombre} esta Corriendo!...<br> <hr><h1>`
    );
  }
}

let Animal1= new Animal("8kg-18kg","Perro","Terrestre","4","Pequeño") 
let Animal2= new Animal("8kg","Conejo","Terrestre","4","Mediano")
let Animal3= new Animal("3kg","Pez","Acuatico","0","Pequeño")

Animal1.showInfo();
Animal1.comer();

Animal2.showInfo();
Animal2.correr();

Animal3.showInfo();
Animal3.comer();
