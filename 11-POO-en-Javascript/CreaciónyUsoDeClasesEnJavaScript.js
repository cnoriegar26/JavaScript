//Objeto clase persona
class Persona{ 
        nombre;
        edad;
        isDeveloper;
        constructor(nombre,edad,isDeveloper){
            this.nombre = nombre
            this.edad = edad
            this.isDeveloper = isDeveloper
        }
        saludo() {
        console.log(`Hola, mi nombre es:${this.nombre}, tengo ${this.edad} años.`)
        }
    }
const nueva_persona = new Persona("Carolina", 26, true)
console.log(nueva_persona)
nueva_persona.saludo()


// Diferencia entre inicialización e instanciación
let numero = 60 // Inicializar
let persona_2 = new Persona("Maria", 34, false)
console.log(typeof persona_2)
console.log(persona_2 instanceof Persona)

// instanceof -> similar a typeof pero para clases