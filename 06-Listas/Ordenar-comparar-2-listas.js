// .short() --> MODIFICA EL ARRAY
const array =[2, 5, 9, 15, 1, 2, 0, 4]

console.log(array);

// Ordena el array de menor a mayor
array.sort((a,  b)=>{
    if(a < b ){
        return -1
    } else if (a > b ){
    return +1;
    } else { //  a === b
    return 0;
    }
})
console.log(array);

// Ordenar el array de mayor a menor
array.sort((a,  b)=>{
    if(a < b ){
        return +1
    } else if (a > b ){
    return -1;
    } else { //  a === b
    return 0;
    }
})
console.log(array)

// Ordenar únicamente arrays numericos
// otra manera de ordenar el array
const arraynumerico = [4, 1, 7, 3, 1, 3, 56, 1, 546];
arraynumerico.sort((a,b) => b -a);
console.log(arraynumerico);


// Interesante arrays de objetos
// Ordenar la lista de objetos de mayor a menor
const ListaObjetos = [
    { nombre: "Carla", edad: 25 },
    { nombre: "Carolina", edad: 26 },
    { nombre: "Catherin", edad: 27 },
    { nombre: "Andres", edad: 30 },
    { nombre: "Paula", edad :6 } 
]
// este es una manera de hacerlo
//ListaObjetos.sort((a, b)=>{
//    if (a.edad < b.edad){
//    }else if(a.edad > b.edad)
//    {
//        return +1;
//    }else{
//        return 0;
//    }
//})
//console.log(ListaObjetos);

// Otra Manera de Hacerlo
ListaObjetos.sort((a, b) =>{(a.edad - b.edad)
    
})
console.log(ListaObjetos);