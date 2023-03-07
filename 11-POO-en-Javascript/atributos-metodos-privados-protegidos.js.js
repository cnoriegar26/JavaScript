//Objeto clase persona
class Persona{ 
// private -> #
// private -> Sólo se puede acceder desde dentro de la clase
    #nombre
    #edad
    #obtenEdad  
    
    //Protected -> 
    //Protected ->  Sólo se puede acceder desde dentro de la clase y desde clases descendientes
    _isDeveloper = true;
    constructor(nom,edad){
        this.nombre = nom
        this.edad = edad
        
    }
    
    saludo() {
    console.log(`Hola, mi nombre es:${this.nombre}, tengo ${this.edad} años.`)
    }
    obtenNombre(){
       return this.#nombre
    }
    #obtenEdad(){
        return this.#edad
    }
}
const persona = new Persona("Carolina",70)
console.log(persona)
console.log(persona.nombre)
persona.saludo()
console.log(persona.obtenNombre())
//cosole.log(persona.#obtenEdad())
//Sconsole.log(persona._isDeveloper)


