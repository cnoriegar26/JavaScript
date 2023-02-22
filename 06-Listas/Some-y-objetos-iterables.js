// .some()
const array = [3, 7, 2, 4, 7, 9, 42, 35, 7865, 23, -2]

const res = array.some(valor => valor < -0)

console.log(res)

const existe = array.some(valor => valor === 9)

console.log(existe)

const ListaObjetos = [
    { nombre: "Carla", edad: 25 },
    { nombre: "Carolina", edad: 26 },
    { nombre: "Catherin", edad: 27 },
    { nombre: "Andres", edad: 30 },
    { nombre: "Paula", edad :6 } 
]

const existePablo = ListaObjetos.some(persona => persona.nombre === "Pablo")

console.log(existePablo)

// Cómo obtener una lista a partir de un objeto iterable
const str = "Hola soy Carolina"
console.log(str[5])

const ar_str = Array.from(str)
console.log(ar_str)

const set = new Set([2, 3, "hola", 4])
const ar_set = Array.from(set)
console.log(ar_set)

const keys = array.keys()
console.log(keys)

const ar_keys = Array.from(keys)
console.log(ar_keys)