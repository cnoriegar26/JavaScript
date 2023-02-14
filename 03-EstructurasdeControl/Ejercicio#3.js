//Ejercicio 3
// Factorial-for
let Factorial = 1;
for (let i = 1; i <= 10; i++) {
    Factorial = Factorial*i;
    console.log(Factorial)
}

//factorial-While
let Fact = 10;
var i = Fact-1;

while(i > 1){
    Fact *= i;
    i--;
}
console.log(Fact);


// Factorial-Break
while (Fact) {
    Fact*= i;
    i--;
    if(i <= 1) 
    break;
}
    console.log (Fact);

