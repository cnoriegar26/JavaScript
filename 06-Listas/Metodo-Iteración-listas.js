// Iterar los valores de una lista
const array = ["hola", 2, 5, 90, false, undefined]

// Forma antigua(Poco Eficiente)
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
    
}

//Froma ES6 (más eficiente) .forEach()
let suma = 0;
const arrayNums = [3, 6, 2, 77, 2, 3, 93, 19];
arrayNums.forEach( valor =>{
    suma += valor;
    console.log(valor);

})
console.log(suma);

// Busqueda de un valor dentro de una lista .find()
// Quiero encontrar el elemento 90 


const variable = array.find(valor =>{
    if(valor === 90){
        return true;        
    }
})

console.log(variable);

const ListaObjetos = [
    { nombre: "Carla", edad: 25 },
    { nombre: "Carolina", edad: 26 },
    { nombre: "Catherin", edad: 27 },
    { nombre: "Andres", edad: 30 },
    { nombre: "Paula", edad :6 } 
]

//const objeto = ListaObjetos.find(o =>{
 //   if(o.nombre == "Andres"){
 //   return true
//}
//})
const objeto = ListaObjetos.find(o => o.nombre === "Andres")
console.log(objeto.edad);

const {edad} = ListaObjetos.find(o => o.nombre === "Andres")
console.log(edad);