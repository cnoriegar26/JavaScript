// Ejercicio # 6
// Una variable que contenga la lista de la compra (mínimo 5 elementos)
const Listacompra = ["Arroz", "Frijol", "Pastas", "Carnes", "Alverjas"]

// Modifica la lista de la compra y añádele "Aceite de Girasol"
Listacompra.push("Aceite de girasol");
console.log(Listacompra);

//Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
Listacompra.pop();
console.log(Listacompra);

//Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliFavoritas = [
    {
        titulo: "The matchmaker's playbook",
        director: "Almizcle de tosca",
        fecha: new Date(2018, 2, 15)
    },
    {
        titulo: "Tres metros sobre el cielo",
        director: " Fernando González Molina",
        fecha: new Date(2010, 11, 3)
    },
    {
        titulo: "El protector",
        director: " Robert Lorenz",
        fecha: new Date(2021, 0, 15)
    }
]
//Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const ListaNueva = peliFavoritas.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1))
console.log(ListaNueva)

//Una nueva lista que contenga los directores y titulo de la lista de películas original (utilizando map)
const directores = ListaNueva.map(pelicula => {
    return pelicula.director
    
})
const titulos = ListaNueva.map(pelicula => {
    return pelicula.titulo
})

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

const directores_titulos = directores.concat(titulos);
console.log(directores_titulos);

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const directores_titulos_prop = [...directores, ...titulos]
console.log(directores_titulos_prop);