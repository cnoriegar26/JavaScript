// Ejercicio #4- Cadenas de textos

// Cadena de texto nombre
let nombre = "Carolina"; 
console.log(nombre);

// Cadena de texto apellido
let apellido = "Noriega";
console.log(apellido);

// Cadena de texto estudiante concatenado con nombre y apellido 
let estudiante =(nombre.concat(" ", apellido));
console.log(estudiante);

// Cadena de texto EstudianteMayus
estudianteMayus = `${estudiante} `;
console.log(estudianteMayus.toLocaleLowerCase());

// Cadena de texto EstudianteMinus
estudianteMinus=`${estudiante} `;
console.log(estudianteMinus.toLocaleUpperCase()); 

// Número de letras de la cadena
console.log(estudiante.length); 

//primera letra del Nombre
console.log(estudiante.charAt(0));

// Última letra del Apellido
console.log(estudiante.charAt(15));

//Una cadena de texto que elimine los espacios
console.log(estudiante.replace(/ /g, "");


//si el Nombre está contenido en la variable "estudiante"
console.log(estudiante.includes(nombre));

