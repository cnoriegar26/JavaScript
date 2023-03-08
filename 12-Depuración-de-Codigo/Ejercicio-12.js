let numero = 6
function Fibonacci(numero) {  
    let lista = [1, 1]
    for (let i = 2; i < numero; i++) {
        lista.push(lista[i - 1] + lista[i - 2])
    }
    return lista
}

console.log(Fibonacci(numero))