// operador  .valueOf() - Obtener valores numéricos a partir de literal 
let a = 2; 
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a.valueOf() + b.valueOf());
console.log(b.valueOf());

let string = new String("Hola soy un estring");
console.log(string);
console.log(string.valueOf());

// NaN - Infinity
let n = Number('adios');
console.log(n);
console.log(isNaN(n));

let numerador = 19;
let divisor = 0;

console.log(numerador / divisor);
let divisor_2 = null;
console.log(numerador / divisor_2);


// Cómo convertir los string a valores numericos con Number, ParseInt 
let numero = '5.89';
let num2 = 17.2; 
console.log(typeof numero);
console.log(numero + num2); //Error de Concepto

console.log(Number(numero) + num2);

console.log(parseInt(numero));
console.log(parseFloat(numero));

let num3 = 4;
console.log(parseInt(num3));
console.log(parseFloat(num3));

// Numeros Hexadecimales (Base 16)
let numHex = '0x3a5b7';
console.log( parseInt(numHex))

// Obtener los valores maximo y minimo en  Javascript
let min_presicion = Number.EPSILON
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_presicion);
console.log(min_valor_JS);
console.log(max_valor_JS);


