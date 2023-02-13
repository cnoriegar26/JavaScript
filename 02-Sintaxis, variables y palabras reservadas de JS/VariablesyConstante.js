// Variables
var variable;
var variableLet_;

//const constante
const constante="Hola soy una constante";
console.log(constante);
//constante ="Adios"; Nos da un error, no se puede 

// Variable var
var a = 1;
console.log(a);

a = 4;
console.log(a);

// Variable Let
let b = 3;
console.log(b);

b = 5;
console.log(b);


var variable="Hola soy una variable VAR";

for (var i = 0; i < 3; i++) {
    var variable = "soy la segunda variable VAR";
}
console.log(variable);


var variableLet="Hola soy una variable Let";

for (var i = 0; i < 3; i++) {
    var variableLet = "soy la segunda variable Let";
}
console.log(variableLet);


/////////////////////////////////
var num = 4
console.log(typeof num);