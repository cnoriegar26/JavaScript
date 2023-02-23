// Ejercicio#7-3-Fedchas
//Crea un archivo llamado fechas.js que contenga las siguientes líneas
// La fecha de hoy
const fecha = new Date();
console.log(fecha);

//La fecha de tu nacimiento
const fecha_Nac = new  Date("August 26 1995");
console.log(fecha_Nac);

//Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
console.log(fecha > fecha_Nac);

//Una variable que contenga el día de tu nacimiento
const dia = fecha_Nac.getDate();
console.log(dia);

//Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mes = fecha_Nac.getMonth();
console.log(mes);

//Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const año = fecha_Nac.getFullYear();
console.log(año);

