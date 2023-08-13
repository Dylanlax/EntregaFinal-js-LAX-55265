

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
