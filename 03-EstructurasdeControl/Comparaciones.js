// Comparaciones


// Igualdad : ==; ===
if(5 == 5){
    console.log("5 es igual a 5");
}
if(5 === 5){
    console.log("5 es igual a 5");
}

// == Solo comparar el valor
// === Compara el valor y el tipo
let a = 5;
console.log(typeof a);
let b = "5";
console.log(typeof b);

if(a == b){
    console.log("a es igual a b  - Debil");
}
if(a === b){
    console.log("a es igual a b - Fuerte");
}
// Desigualdad =/=
let c = 4;
let d = 5;

if  (c != d)  {
    console.log("c es diferente a d - Débil" )
}

if  (c !== d)  {
    console.log("c es diferente a d - Fuerte" )
}
// Comparaciones mayor que y menor que
let maximo  = 10;
let mínimo =  5 ;

if  (maximo  > mínimo)  {
    console.log ("max es mayor que min")
}
if  (maximo >= 10)  {
    console.log ("max es mayor o igual que min")
}

if  ( mínimo  <  maximo )  {
    console.log ("min es menor que max")
}
if  ( mínimo  <=  maximo )  {
    console.log ( "min es menor o igual que max" )
}