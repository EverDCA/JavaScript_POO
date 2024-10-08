class Instrumento {
    constructor(tipo, marca, material) {
        this.tipo = tipo;
        this.marca = marca;
        this.material = material;
        this.precio = parseInt(prompt("Ingrese el precio de su Instrumento:"));
    }

    registrar() {
        document.write("------------------------------------------<br>");
        document.write(`<div class="alert alert-success">El registro del Instrumento fue un éxito<br></div>`);
        document.write("------------------------------------------<br>");
        document.write(`Tu Instrumento es del tipo ${this.tipo}<br>`);
        document.write(`De la marca ${this.marca}<br>`);
        document.write(`Del material ${this.material}<br>`);
        document.write(`Con el precio del instrumento de: $${this.precio}<br>`);
    }
}

class Guitarra extends Instrumento {
    constructor(tipo, marca, material, numeroDeCuerdas) {
        super(tipo, marca, material);
        this.numeroDeCuerdas = numeroDeCuerdas;
        this.acordes = prompt("Ingrese el número de acordes básicos que conozcas:");
    }

    tocar() {
        const tocar = prompt("¿Quieres tocar algo para nosotros? si(y)/no(n)").toLowerCase();
        if (tocar === "y") {
            document.write("𝄟  <br> 𝅘𝅥𝅮  <br>𝅘𝅥𝅱 𝅘𝅥𝅮<br>");
            document.write("𝄟 𝅘𝅥𝅮  𝅘𝅥𝅱  <br>𝅘𝅥𝅮<br>");
            document.write("𝄟  <br>𝅘𝅥𝅮  𝅘𝅥𝅱 𝅘𝅥𝅮<br>");
            document.write("𝄟 𝅘𝅥𝅮  <br>𝅘𝅥𝅱 𝅘𝅥𝅮<br>");
            document.write("𝄟 <br>𝅘𝅥𝅮  𝅘𝅥𝅱 𝅘𝅥𝅮<br>");
        } else {
            document.write("Esta bien talvez puedas tocar en otra ocasion!<br>");
        }
    }
}

const guitarra1 = new Guitarra("Acústico", "Martin", "Madera pura", "5");
guitarra1.tocar();
guitarra1.registrar();
