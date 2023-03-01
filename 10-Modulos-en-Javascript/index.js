// Formas de importar/exportar módulos
// 1. CommonJS - require
// 2. Import ES6 - import
//const fact = factorial(5);
//console.log(fact);
//const sum= suma(12,90)
//console.log(sum);
//const ele= elevado(2,3);
//console.log(ele);
const { factorial, suma } = require("./modulos/matematicas.js")

const fact = factorial(5)
console.log(fact)

const sum = suma(12, 90)
console.log(sum)

// console.log(module)
