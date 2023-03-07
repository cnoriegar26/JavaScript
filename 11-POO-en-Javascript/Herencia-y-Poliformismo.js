// Inheritance - Herencia
class Persona {
    _nombre
    _edad
    constructor(nombre, edad) {
        this._nombre = nombre
        this._edad = edad
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this._nombre}, tengo ${this._edad} años.`)
    }
}

class Desarrollador extends Persona {
    constructor(nombre, edad, lenguaje) {
        super(nombre, edad)
        this.lenguaje = lenguaje
    }

    saludo() { // Override //volver a definir la función
        super.saludo()
        console.log(`Y zasoy desarrollador de ${this.lenguaje}`)
    }
}

const nuevodev = new Desarrollador("Carolina", 27, "Javascript")
console.log(nuevodev)
nuevodev.saludo()

// Polimorfismo => Varias formas