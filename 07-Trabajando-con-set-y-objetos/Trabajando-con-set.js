// set o conjuntos (en castellano)
const array = [1, 2, 3, 4, 5, "hola", {id: 5}, "hola"];

// set no van a haber valores respetidos
const miSet = new Set(array);
console.log(array);
console.log(miSet);

// añadir valores .add()
miSet.add(9);
console.log(miSet);
miSet.add(4);
console.log(miSet);

// eliminar un valor .delete()
miSet.delete("hola");
console.log(miSet);

// eliminar todos los valores del set .clear()
//miSet.clear();
//console.log(miSet);

// Para saber si miset contiene un valor utilizamos el metodo .has()
//console.log(array.includes(2));
console.log(miSet.has(40));

// size
console.log(miSet.size);

miSet.forEach(valor => {
    console.log(valor);    
})

const it_miSet = miSet.values()
console.log(it_miSet);

const ar_miSet = [... miSet]
console.log(ar_miSet[1]);

