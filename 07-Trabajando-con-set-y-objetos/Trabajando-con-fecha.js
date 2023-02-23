// Trabajando con fechas
 const fecha = new Date()
 console.log(fecha);

 const fecha2= new Date(1997,10, 20, 1 ,23, 53, 192);
 console.log(fecha2);


 const fecha3 = new Date(-10000000000000) // Milisegundos
console.log(fecha3)

const fecha4 = new Date("October 13, 1979 12:15:15")
console.log(fecha4)

console.log(fecha < fecha2)

const fecha5 = new Date(1987, 10, 20, 1, 23, 52, 192)
console.log(fecha5)

console.log(fecha2 === fecha5) // ERROR - No se pueden comparar fechas de esta manera

console.log(fecha2.getTime() === fecha5.getTime()) // OK - Esta es la forma de comparar la igualdad entre fechas

/////// Obtener el día, el mes y el año de una fecha
// Para Obtener el día  tenemos el metodo .getDate()
console.log(fecha2.getDate())

// Para Obtener el mes utilizariamos el metodo .getMonth() (0 - Enero, 11 - Diciembre)
console.log(fecha2.getMonth() + 1)

// Para Obtener el año .getFullYear()
console.log(fecha2.getFullYear())

// Mostrar una fecha en un string
console.log(fecha2)
// un truco para mostrar la fecha en un string
// utilizamos el metodo .toLocaleDateString
// visitar: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
console.log(fecha2.toLocaleDateString("en-US"))