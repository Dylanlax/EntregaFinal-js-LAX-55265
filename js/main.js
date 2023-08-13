

function bienvenida(){
    let nombre = prompt("Ingrese su nombre")
    alert("Bienvenido a nuestro sitio " + nombre + "!")
}


bienvenida()

document.addEventListener("keyup", e => { //aca le pido que cuando suelto la tecla haga la E
    if (e.target.matches("#buscador")) {
        document.querySelectorAll(".articulo").forEach(componente => { // aca le pido que recorra todos los articulos
            componente.textContent.toLowerCase().includes(e.target.value) // devuelve true o false si hay coincidencia
            ? componente.classList.remove("filtro")
            : componente.classList.add("filtro") // Use operador de IF y ELSE, le pido que si no coincide agregue la clase filtro y esconda la busqueda
        })
    }
})