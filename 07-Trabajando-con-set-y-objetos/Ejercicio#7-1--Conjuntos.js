// Ejercicio #7-1--Conjuntos
//Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
//Un nuevo Set con los nombres de tu familia
const familia = ["Cathe","Ligia", "Paula", "Lary", "Pablo"]
const miset = new Set(familia);
console.log(miset);
// Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
miset.add("Caro");
console.log(miset);
miset.add("Caro");
console.log(miset);
//Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
miset.add("Javascript");
console.log(miset);
