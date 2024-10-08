//definir la clase Celular

class FigurasGeo {
  constructor(lados,base,altura,nombre,color) {
    this.lados = lados
    this.base = base
    this.altura = altura
    this.nombre = nombre
    this.color = color
    this.info = `<h1 class="">Informacion de la figura: ${this.nombre} <br>
        Lados: ${this.lados} <br> base: ${this.base} <br> altura: ${this.altura} <br> Color: ${this.color}  <br><h1>`;
  }

  showInfo() {
    document.write(this.info);
  }

  Area() {
      if (this.nombre == "Circulo"){
        let figura = parseFloat(prompt("Ingrese el Radio del circulo: "))
        let resultado = 3.1416*(figura**2)
        document.write(`<h1 class="h1 fs-3">El Area del ${this.nombre} es: ${resultado}!...<br> <hr><h1>`)
      }
      else if (this.nombre == "Rectangulo"){
        let resultado = (this.base*this.altura)
        document.write(`<h1 class="h1 fs-3">El Area del ${this.nombre} es: ${resultado}!...<br> <hr><h1>`)
      }
      else if (this.nombre=="Triangulo"){
        let resultado = (this.base*this.altura)/2
        document.write(`<h1 class="h1 fs-3">El Area del ${this.nombre} es: ${resultado}!...<br> <hr><h1>`)
      }
  }
  Perimetro(){
    if (this.nombre == "Triangulo"){
      let lado1= parseInt(prompt("Ingrese el primer lado del triangulo: "))
      let lado2= parseInt(prompt("Ingrese el primer lado del triangulo: "))
      let lado3= parseInt(prompt("Ingrese el primer lado del triangulo: "))
      let resultado= (lado1+lado2+lado3)
      document.write(`<h1 class="h1 fs-3">El Area del ${this.nombre} es: ${resultado}!...<br> <hr><h1>`)}
            
      else if (this.nombre == "Rectangulo"){
        let resultado= (this.base+this.altura)*2
        document.write(`<h1 class="h1 fs-3">El Area del ${this.nombre} es: ${resultado}!...<br> <hr><h1>`)}
            
        else if (this.nombre == "Circulo"){ 
          let diametro = parseInt(prompt("Ingrese el diametro del circulo: "))
          let resultado= 3.1416*(diametro**2)
          document.write(`<h1 class="h1 fs-3">El Area del ${this.nombre} es: ${resultado}!...<br> <hr><h1>`)}
  }
}
let Figura1=new FigurasGeo(0,0,0,"Circulo","Rojo") 
let Figura2=new FigurasGeo(3,21,21,"Triangulo","Azul")
let Figura3=new FigurasGeo(4,22,14,"Rectangulo","Negro")


Figura1.showInfo();
Figura1.Area();

Figura2.showInfo();
Figura2.Perimetro();

Figura3.showInfo();
Figura3.Area();
