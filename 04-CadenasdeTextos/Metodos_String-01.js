//Metodos de cadena de textos (parte 1)
// Metodos mas utilizados con cadenas de caracteres
// Como obtener la Longuitud de un String

let string =  "Hola soy un string";
console.log(string.length);

//Obteer parts de cadenas de caracteres
// slice() substring() substr()

let slice_string = string.slice(5, 10);
console.log(slice_string);

let substring_string = string.substring(5, 10);
console.log(substring_string);

let substr_string = string.substr(5,10);
console.log(substr_string)

// Reemplazar parte del contednido de una cadena de texto 

let cadena = "Hola mi nombre es Carolina"

console.log(cadena);
// Al utilizars strings sólo reemplaza la primera isntancia 
console.log(cadena.replace('Carolina', 'Nina'));

let texto_largo="Seas quien fueres o lo que hagas, si deseas algo con firmeza, es porque ese deseo nació antes en el alma del universo, y es tu misión en la Tierra."
console.log(texto_largo.replace('deseo','anhelo'));


//Al utilizar la expresión regular /g (global), reemplaza todas las instancias
console.log(texto_largo.replace(/es/g, 's'))