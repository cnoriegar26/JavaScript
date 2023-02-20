//Una variable que contenga tu altura en centímetros (entero)
let altura_cm = '160';

//Una variable que contenga tu altura en metros (número de coma flotante)
let altura_m = '1.60';
//Una variable que contenga tu peso en kilogramos (número de coma flotante)
let  Peso_Kg = '65.23';
//Una variable que contenga tu altura en metros redondeada hacia arriba
let altura_red_A;
altura_red_A = Math.ceil(altura_m);
console.log(altura_red_A);
//Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let Peso_kg_red_B
Peso_kg_red_B = Math.floor(Peso_Kg);
console.log(Peso_kg_red_B);

//Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let igualnumer = Number.MAX_VALUE + 1 === Number.MAX_VALUE;
console.log(igualnumer);
