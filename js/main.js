

function bienvenida(){
    let nombre = prompt("Ingrese su nombre")
    alert("Bienvenido a nuestro sitio " + nombre + "!")
}


bienvenida()

/* document.addEventListener("keyup", e => { //aca le pido que cuando suelto la tecla haga la E
    if (e.target.matches("#buscador")) {
        document.querySelectorAll(".articulo").forEach(componente => { // aca le pido que recorra todos los articulos
            componente.textContent.toLowerCase().includes(e.target.value) // devuelve true o false si hay coincidencia
            ? componente.classList.remove("filtro")
            : componente.classList.add("filtro") // Use operador de IF y ELSE, le pido que si no coincide agregue la clase filtro y esconda la busqueda
        })
    }
}) */ // ESTE FUE MI PRIMER INTENTO

document.addEventListener("keyup", e => { //aca le pido que cuando suelto la tecla haga la E
    if (e.target.matches("#buscador")) {
        document.querySelectorAll(".articulo").forEach(componente => { // aca le pido que recorra todas las cards
            const parrafo = componente.querySelector("p:first-of-type"); // Creo una variable que solo lea los primeros parrafos de cada card, porque el segundo parrafo es el precio
            const match = parrafo.textContent.toLowerCase().includes(e.target.value)
            ? componente.classList.remove("filtro")
            : componente.classList.add("filtro") // Use operador de IF y ELSE, le pido que si no coincide agregue la clase filtro y esconda la busqueda
        })
    }
})



/* -------------------------------------------------*/

// INTENTO DE CARRITO


// Lista de contenedores de productos
const listaDeProductos = document.querySelector(".productList")


// Variable de carrito
let allProducts = []



listaDeProductos.addEventListener("click", i => {
    if(i.target.classList.contains("btn-add-cart")){
        const product = i.target.parentElement // LE PIDO QUE SI DOY CLICK EN BUTTON SELECCIONE EL PADRE DE LA CARD QUE CONTIENE ESE BUTTON


        
        
        const infoProduct = {
            quantity: 1,
            title: product.querySelector("p:first-of-type").textContent, // Le pido que lea el nombre del producto
            price: product.querySelector("p:nth-of-type(2n)").textContent, // le pido que lea el precio del producto

        }

        allProducts = [...allProducts, infoProduct]

        console.log(allProducts)
    }
})



// Funcion para mostrar HTML

