//Bucles For

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let lista  = [1, 4, 6, 2, 3, 7, 10, 12, 800];
for (let i = 0; i < lista.length; i++) {
console.log(lista[i]*2)
}
// EStrutura for....of
for (let Valor of lista) {
    console.log(Valor)
}


//Estructura forEach
lista.forEach( valor => {
    console.log(valor)
})

let persona ={
    nombre: "Carolina",
    apellido: "Noriega",
    edad: 27,
    isDeveloper: true
}
console.log(persona.nombre);

let propie="edad";
console.log(persona[propie])

for  ( let  propiedad  in  persona )  {
    console.log(propiedad) ;
    console.log(persona[propiedad]);
}