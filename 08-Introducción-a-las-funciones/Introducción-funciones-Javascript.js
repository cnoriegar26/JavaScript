// Como son las funciones y como se utilizan
const nombre_1 = "Carolina"

// saludar("Miguel")
saludar(nombre_1)

function saludar(nombre) {
    console.log(`Hola ${nombre}`)
}

///////

let nombre_2 = "Juan"
console.log(nombre_2)

despedir(nombre_2)
console.log(nombre_2)

function despedir(nombre) {
    nombre = "Diego"
    console.log(`Adiós ${nombre}`)
}

////

let persona = { nombre: "Delfina", apellido: "Picón" }
console.log(persona)

saludarPersona(persona)

console.log(persona)

function saludarPersona(objeto) {
    objeto.apellido = "Noriega"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}

saludar()

///////

function imprimeNumero(numero = 7) { // Parámetros por defecto
    console.log(numero)
}

imprimeNumero();

/////////

function imprimir(...parametros) {
    console.log(parametros)
}

imprimir(1, 3, 9, 2, "hola", { id: 9 })

/////

function suma(...nums) {
    return nums.reduce((a, b) => a + b)
}

const sum = suma(1, 2, 3, 4, 9, 15, 16)
console.log(sum)

//////
let variable = "hola"

function multiplicar(a = 0, b = 0) {
    console.log(variable)
    let variable_interna = "adiós"
    console.log(variable_interna)
    return a * b
}


console.log(multiplicar(4, 9))