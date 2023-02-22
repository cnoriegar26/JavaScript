// Como trabajar con listas(arrays, arreglos, vectores...)
let vari = {id : false};
let array = [1, "hola", false, { id: 5 }, null, undefined, vari]

console.log(array);

//Acceder a los valores de un array a través de una posición
// Array [indice] => 0, 1, 2, 3, 4, 5...
console.log(array [0]);
console.log(array [1]);
console.log(array [2]);
console.log(array [3]);


//Métodos para introducir nueos valores en nuestros  arrays
// .push()  .unshift => Mutan el valor de nuestro array 

// valores al final -> Push
array.push ("final",45, 100, false);
console.log(array);

// valores al final -> Unshift
array.unshift("inicio", 20, 100, false );
console.log(array);

// Metodos para eliminar valores en nuestro arrays
// .pop() .shift => Mutan el valor del array 

const array2 = [1, 3, "hola", false];
// Valores al final--> Pop 
// Elimina el ultimo valor 
array2.pop();
console.log(array2);

// Valores al Principio --> Shift
array2.shift();
console.log(array2);

// Metodo para eliminar, modificar o añadir valores en nuestro array
// .splice(x,y,z)
const array3 = [ 1, 2, 3, 4, 5, 6 ]

// Eliminar valores .splice(indice, numValoresEliminar)
array3.slice(2, 1);
console.log(array3)

//Añadir valores .splice
array3.splice(2, 0, "hola")
console.log(array3);

// Modificar valores .splice(indice, 1, valores)
array3.splice(2, 1, );
console.log(array3);