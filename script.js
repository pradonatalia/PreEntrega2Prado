let menu = [
    { id: 1, nombre: "Hamburguesa Alfa", categoría: "simples", precio: 2480, descripcion: "Medallón, cheddar y panceta" },
    { id: 2, nombre: "Hamburguesa Beta", categoría: "dobles", precio: 3520, descripcion: "Doble medallón, cheddarx2 y pancetax2" },
    { id: 3, nombre: "Hamburguesa Gamma", categoría: "simples", precio: 2900, descripcion: "Medallón, queso provolone, palta y cebolla crispy" },
    { id: 4, nombre: "Hamburguesa Delta", categoría: "dobles", precio: 3250, descripcion: "Doble Medallón, lechuga, tomate y panceta" },
    { id: 5, nombre: "Hamburguesa Epsilon", categoría: "triples", precio: 3790, descripcion: "Triple medallón, cheddarx3, pancetax3 y salsa especial Epsilon de la casa" },
    { id: 6, nombre: "Papas fritas", categoría: "extra", precio: 2000, descripcion: "Papas fritas con crema, queso cheddar y verdeo" },
]

let mensaje = "Ingrese la opción deseada:\n1. Ver menú\n2. Agregar a mi pedido\n3. Filtrar\n4. Ver mi pedido\n5. Finalizar mi compra\n0. Salir"
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

while (opcion !== 0) {
    if (opcion < 6) {
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
                        unidades: 1,
                        categoría: hamburguesaBuscada.categoría,
                    })
                }
                break;
            case 3:
                let filtro = (prompt("Ingrese por tipo de hamburguesa a filtrar: simples, dobles o triples")).toLowerCase()
                let hamburguesasFiltradas = (menu.filter((hamburguesa) => hamburguesa.categoría === filtro))
                alert("Nuestras hamburguesas " + filtro + " son: " + mostrar(hamburguesasFiltradas))
                break;
            case 4:
                if (pedido.length > 0) {
                    let subTotal = pedido.reduce((acum, hamburguesa) => acum + (hamburguesa.precio * hamburguesa.unidades), 0)
                    alert("Su pedido hasta el momento es:" + mostrarSubTotal(pedido) + "\n" + "Subtotal: " + subTotal + "$")
                } else {
                    alert("No ha agregado ningún ítem al pedido. Intente nuevamente")
                }
                break;
            case 5:
                if (pedido.length > 0) {
                    if (pedido.find((papas) => papas.categoría === "extra")) {
                    } else {
                        let agregarPapas = (prompt("No ha agregado papas a su pedido. Desea agregarlas para completar el combo? (SI o NO)")).toLowerCase()
                        if (agregarPapas === "si") {
                            pedido.push({
                                id: 6,
                                nombre: "Papas fritas",
                                precio: 2000,
                                unidades: 1,
                                categoría: "extra"
                            })    
                        } else {
                        }
                    }
                    alert("Gracias por su compra\nEl detalle de su pedido es:" + mostrarSubTotal(pedido) + "\nDebe abonar " + (pedido.reduce((acum, hamburguesa) => acum + (hamburguesa.precio * hamburguesa.unidades), 0) + "$\nSu pedido llegará en 30 min"))
                    pedido = []
                }
                else {
                    alert("No ha agregado ningún ítem al pedido. Intente nuevamente")
                }
                break;
        }
        opcion = Number(prompt(mensaje))
    } else {
        opcion=Number(prompt("Opción incorrecta!\nVuelva a intentar\n" + mensaje))
    }    
}
alert("Gracias por visitarnos!")











