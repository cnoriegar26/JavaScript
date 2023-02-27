const miFuncion = valor => {
    if(typeof valor === "numero") {
        return 2 * valor
    }
    //return false
    throw new Error("El valor debe ser de tipo numero")
}

// const elDoble = miFuncion("a1a")

try {
    // Código que puede fallar
    console.log("Esta Ejecutandose de manera correcta")
    const doble = miFuncion(num)
    console.log(doble)
} catch(e){
       // En caso de fallar quiero que ejecutes
        console.error ( `El valor de e es: ${ e } ` )
        console.error("¡ERROR!")
        
} finally{
    console.log("Esto se va a ejecutar tanto si se produce algún error, como si no existe ninguno")
}

// InternalError, SyntaxError, TypeError, RangeError y ReferenceError
// Para investigar, indagar acerca de errores en Javascript ===>
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error
