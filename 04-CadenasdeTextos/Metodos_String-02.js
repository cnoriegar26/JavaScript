//Metodos de cadena de textos (parte 2)
let input = "eScorpio";
let db= "escorpio";

//toLowerCase() -toUpperCase()
console.log(input.toLocaleLowerCase());
console.log(input.toLocaleUpperCase());

console.log(input.toLocaleLowerCase() == db.toLocaleLowerCase());
console.log(input.toLocaleUpperCase() == db.toLocaleUpperCase());

//Forma de concatenar dos cadenas de caracteres
let str_1 = "Hola soy la primera cadena";
let str_2 = "Y yo soy la segunda cadena";

console.log(str_1.concat(" ", str_2));
console.log(str_1 + " " + str_2);
console.log(`${str_1} ${str_2}`);

// Eliminar espacios al inicio y al final 
let str_3 = "Hola soy un string con espacios al final. "
console.log(str_3.length);

// trim()
console.log(str_3.trim().length)
console.log(str_3.trimStart().length)
console.log(str_3.trimEnd().length)

//obtener el caracter que hay en cierta posición

let str_4 = "Hola soy un string numero 4 "; //equivalente a : ["H", "o", "l", "a", " ", "s",..........]

console.log(str_4.charAt(5));
console.log(str_4[5]);

//obtener la posición de una palabra dentro de una cadena de caractere
 let str_5 ="Hola soy Carolina y me gusta practicar Yoga, Mi nombre es Carolina y me apellido es Noriega";
 console.log(str_5.indexOf("Carolina"));
 console.log(str_5.charAt(9));
 console.log(str_5.lastIndexOf("Carolina"))

