//Ejercicio #2

const nombre = "Carolina";
var edad = 27;

if( Developer ==true){
    console.log("SI");

}
else{
console.log("NO");
}

const FechaNac = new Date("August 26 1995");

const LibFavorito = {
    titulo: "El Alquimista",
    autor: "Paulo Coelho",
    fecha: new Date(1,1997),
    }
    const url= new URL("https://www.mercaba.es/usa/el_alquimista_de_coelho.pdf")
    

    console.log(LibFavorito);
    
    const listas = ["Nombre: "+ nombre,"Edad: "+ edad,"Developer: "+Developer,"Fecha-Nac: " +FechaNac, "Libro-Fav:", LibFavorito,]
    console.log(listas);
    console.log(url);