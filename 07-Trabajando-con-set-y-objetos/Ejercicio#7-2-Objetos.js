//Ejercicio#7-2-Objetos
//crea un archivo llamado objetos.js que contenga las siguientes líneas
//Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datosPerso = 
{    nombre: "Carolina",
    apellido: "Noriega",
    edad: 26,
    altura : 1.60, 
    isDeveloper: true   
}
//Una variable que obtenga tu edad a partir del objeto anterior
const ObtenerEdad = "edad";
console.log(datosPerso[ObtenerEdad]);
//Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const datosNuevos = [    
        datosPerso,
        { nombre: "Carla", edad: 25, altura: 1.60, isDeveloper: false },
        { nombre: "Nataly", edad: 27, altura: 1.65, isDeveloper: false },
        { nombre: "Catherin", edad: 27, altura: 1.56, isDeveloper: true  },
        { nombre: "Andres", edad: 30, altura: 1.67, isDeveloper: true },
        
    ] 

//Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
datosNuevos.sort((a,  b)=>(b.edad -a.edad))   
console.log(datosNuevos);
