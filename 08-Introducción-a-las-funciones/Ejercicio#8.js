function devuelvaTrue() {
    return true
}

async function Promesa() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}

function* idsPares() {
    let id = 0
    while(true) {
        yield id += 2
    }
}
