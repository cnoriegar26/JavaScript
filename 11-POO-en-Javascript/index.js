const persona = {
    nombre : "Carolina",
    edad: 26,
    isDeveloper: true,
    saludo : function(){
        console.log("Hello")
    }
}

persona.saludo()

const otra_persona ={
    nombre : "Catherine",
    edad: 26,
    isDeveloper: true,
    saludo : function(){
        console.log("Hello")
    }
}
otra_persona.saludo()

// Función Factory
const creaPersona= (nombre,edad,isDeveloper)=>{
    return {
        nombre,
        edad,
        isDeveloper,
        saludo: function(){
        console.log("Hello")
        }
    }     
}
const nueva_persona= creaPersona("Andrés",30, true)
console.log(nueva_persona)

const nueva_persona2= creaPersona("Paula",23, false)
console.log(nueva_persona2)