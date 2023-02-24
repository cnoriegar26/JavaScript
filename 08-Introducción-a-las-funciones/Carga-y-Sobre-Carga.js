// Carga y sobrecarga de funciones
function  saludar ( )  {
    hola ( )
}

function  hola ( )  {
    console.log ( "¡Hola! Soy la función hola()" )
}

saludar ( )
/// El interpreste lo que esta haciendo es ejecutar, cargar la función :
/// 1. global()
/// 2. saludar() global()
/// 3. hola() saludar() global()
/// 4. saludar() global()
/// 5. global()

/// La sobre carga aplica en las funciones recursivas
// funcion recursiva() {
// recursivo()
// }

// recursivo()