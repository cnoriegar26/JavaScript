//Listas, array o arreglo
const lista1 =[ 1,"hola,true, undefined, null"];
const lista2 = new Array(2, "hola",true,undefined,null);
const lista3 = new Array(3);
lista3[0] = "Soy el primer elemento, index 0";
const lista4 = [lista1, lista2, lista3];


console.log(lista1);
console.log(lista2);
console.log(lista3);
console.log(lista4);

//Obejtos
const movil ={
    altura:10,
    anchura: 5,
    isWhite:false,
    contactos:["Caro", "Cate", "Andrés"],
    tarjeta:{
        marca:"Sandisk",
        almacenamiento:32
    }, 
    "altura-tarjeta": 4
    
} 
movil.año = 2019;
movil.marca = "Samsung";
console.log(movil.marca);

//Fecha
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10)
console.log(fecha_milis);

const fecha_cadena = new  Date("march 25 2020");
console.log(fecha_cadena)

const fecha_valores =new Date(2023, 1, 9);
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth();
const año = ahora.getFullYear();

console.log(dia, mes, año);


lo
 