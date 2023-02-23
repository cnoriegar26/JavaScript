//Trabajando con Objetos 
const objeto = {
    id: 4,
    nombre: "Delfina",
    apellido: "Picón", 
    isDeveloper: false,
    libros_Favoritos : ["El metodo", "El codigo de la manifestación"],
    "4-Juegos": [1, 2, 3, 4]
}
console.log(objeto.nombre);
console.log(objeto.id);
console.log(objeto["4-Juegos"]);

const Propiedad = "isDeveloper";
console.log(objeto[Propiedad]);

const objeto2 = objeto;
console.log(objeto2);

objeto2.nombre = "Yessica"
console.log(objeto2.nombre);
console.log(objeto.nombre);

let valor1 = 4;
let valor2 = valor1;

valor2 = 6;
console.log(valor1);
console.log(valor2);
///////////
obje3 = {...objeto};

console.log(objeto.nombre);
console.log(obje3.nombre);

objeto.nombre= "Carla";
console.log(objeto.nombre);
console.log(obje3.nombre);

// Como ordenar listas de objetos en función de una propiedadad

const listaPeliculas = [
    { titulo: "Lo que el viento se llevó", año: 1939 },
    { titulo: "Titanic", año: 1997 },
    { titulo: "Moana", año: 2016 },
    { titulo: "El efecto mariposa", año: 2004 },
    { titulo: "TED", año: 2012 }
]
console.log(listaPeliculas)
// .sort() -> ES UN METODO QUE MUTA EL VALOR DE LA LISTA ORIGINAL

listaPeliculas.sort((a, b) => a.año - b.año) // NOS PERMITE ORDENAR LA LISTA

console.log(listaPeliculas);