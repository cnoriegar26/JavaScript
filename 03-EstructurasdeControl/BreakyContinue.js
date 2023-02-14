// Casos muy especificos - break, continue
let lista = [1, 2, 3, 4, 5, 6, 7, 8]
for (var i = 0; i < lista.length; i++) {
    console.log(lista[i])
    
    if(lista [i] === 5){
        continue;
    }
    var j = 50;
    console.log(lista[i]);

    if(lista[i]>5){
        break
    }
}

// Cuál es el ambito del Bucle
console.log(i);
console.log(j);