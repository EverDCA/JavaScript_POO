class Personas{
    //constructor
    constructor(nombres,apellidos,identidad,fnacimiento,sexo){
        this._nombres=nombres
        this._apellidos=apellidos
        this._identidad=identidad
        this.fnacimiento=fnacimiento
        this.sexo=sexo

    }

    get_nombres(){
        return this._nombres
    }

    get_apll(){
        return this._apellidos
    }

    get_id(){
        return this._identidad
    }

    set_nombres(new_name){
        this._nombres=new_name
    }

    set_apellidos(new_lastname){
        this._apellidos=new_lastname

    }
    
    showDetails() {
        document.write(`<div class="alert alert-primary">Nombres: ${this._nombres} <br>
            Apellidos: ${this._apellidos} <br>
            N° Identidad: ${this._identidad} <br>
            Fecha De Nacimiento: ${this.fnacimiento} <br>
            Sexo: ${this.sexo} <br><br></div>
        `);
    
    

}
}
const persona1 = new Personas("Ever David", "Canchano Ariza", "1103740439", "18/08/2005", "Masculino");
    // Mostrar los detalles iniciales
    persona1.showDetails();
    
    // Se establecen nuevos valores para los nombres y apellidos
    persona1.set_nombres("Daniel Andres");
    persona1.set_apellidos("Buelvas Perez");
    
    // Mostrar los detalles actualizados
    document.write(`<div class="alert alert-primary">Nombres: ${persona1.get_nombres()} <br>
        Apellidos: ${persona1.get_apll()} <br>
        N° Identidad: ${persona1.get_id()} <br>
        Fecha De Nacimiento: ${persona1.fnacimiento} <br>
        Sexo: ${persona1.sexo} <br><br></div>
        
    `);        