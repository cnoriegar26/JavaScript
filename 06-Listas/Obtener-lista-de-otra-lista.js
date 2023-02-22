// Cómo obtener una lsita a partir de otra lista
const array = ["hola", 1, 2, 3, true, null, "adios"];


// No modifica el valor del arrray original 
console.log(array.slice(1, 4));
const array2 = array.slice(2, 5);
console.log(array2);

const array3 = array.slice(2, -2);
console.log(array3);