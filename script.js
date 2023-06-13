let menu = [
    { id: 1, nombre: "Hamburguesa Alfa", categoría: "simples", precio: 2480, descripcion: "Medallón, cheddar y panceta" },
    { id: 2, nombre: "Hamburguesa Beta", categoría: "dobles", precio: 3520, descripcion: "Doble medallón, cheddarx2 y pancetax2" },
    { id: 3, nombre: "Hamburguesa Gamma", categoría: "simples", precio: 2900, descripcion: "Medallón, queso provolone, palta y cebolla crispy" },
    { id: 4, nombre: "Hamburguesa Delta", categoría: "dobles", precio: 3250, descripcion: "Doble Medallón, lechuga, tomate y panceta" },
    { id: 5, nombre: "Hamburguesa Epsilon", categoría: "triples", precio: 3790, descripcion: "Triple medallón, cheddarx3, pancetax3 y salsa especial Epsilon de la casa" },
    { id: 6, nombre: "Papas fritas", categoría: "extra", precio: 2000, descripcion: "Papas fritas con crema, queso cheddar y verdeo" },
]

let mensaje = "Ingrese la opción deseada:\n1. Ver menú\n2. Agregar a mi pedido\n3. Filtrar\n4. Ver mi pedido\n5. Finalizar mi compra"
let opcion = Number(prompt("Bienvenido a Hamburguesería ε\n" + mensaje))
let pedido = []

function mostrar(array) {
    let lista = ""
    for (const elemento of array) {
        lista = lista + "\n" + elemento.id + ". " + elemento.nombre + ": " + elemento.descripcion + " - " + elemento.precio + "$"
    }
    return lista
}
function mostrarSinDescripcion(array) {
    let lista = ""
    for (const elemento of array) {
        lista = lista + "\n" + elemento.id + ". " + elemento.nombre + " - " + elemento.precio + "$"
    }
    return lista
}

function mostrarSubTotal(array) {
    let lista = ""
    for (const elemento of array) {
        lista = lista + "\n" + elemento.nombre + " x" + elemento.unidades 
    }
    return lista
}


while (opcion !== 5 || opcion!==NaN) {
    switch (opcion) {
        case 1:
            alert("Nuestro menú:" + mostrar(menu))
            break;
        
        case 2:
            let seleccion = Number(prompt("Ingrese el id de la opción que quiere agregar a su pedido" + mostrarSinDescripcion(menu)))
            let hamburguesaBuscada = menu.find((hamburguesa) => hamburguesa.id === seleccion)
            let posicionHamburguesaBuscada = pedido.findIndex((hamburguesa) => hamburguesa.id === hamburguesaBuscada.id)
            if (pedido.find((hamburguesa) => hamburguesa.id === hamburguesaBuscada.id)) {
                pedido[posicionHamburguesaBuscada].unidades++
            } else {
                pedido.push({
                    id: hamburguesaBuscada.id,
                    nombre: hamburguesaBuscada.nombre,
                    precio: hamburguesaBuscada.precio,
                    unidades: 1
                })
            }
            break;
             
        case 3:
            let filtro = (prompt("Ingrese por tipo de hamburguesa a filtrar: simples, dobles o triples")).toLowerCase()
            let hamburguesasFiltradas = (menu.filter((hamburguesa) => hamburguesa.categoría === filtro))
            alert("Nuestras hamburguesas " + filtro + " son: " + mostrar(hamburguesasFiltradas))
            break;
        
        case 4:
            let subTotal = pedido.reduce((acum, hamburguesa) => acum + (hamburguesa.precio * hamburguesa.unidades), 0)
            alert("Su pedido hasta el momento es:" + mostrarSubTotal(pedido)+ "\n" + "Subtotal: " + subTotal + "$")
            break;
        
    }
    opcion = Number(prompt(mensaje))

}
console.log(pedido)
//acá agregar la validación de que si no se encuentra la categoría extra pregunte si quiere papas, con un find
//agregar resta de stock o algo por el estilo
//validar si eligen opción incorrecta o ponen cancelar o escape


