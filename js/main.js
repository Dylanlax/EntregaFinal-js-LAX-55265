

function bienvenida(){
    let nombre = prompt("Ingrese su nombre")
    alert("Bienvenido a nuestro sitio " + nombre + "!")
}


bienvenida()

function edad(){
    let edad = parseInt(prompt("Ingrese su edad"))

        while (edad < 18) {
            alert("Usted necesita ser mayor a 18 años para poder ingresar");
            edad = parseInt(prompt("Ingrese su edad nuevamente"));
        }

    alert("usted cumple con la edad requerida para ingresar")
}

edad()





const productos = [
    {nombre: "gtx1080ti", precio:10000},
    {nombre: "rtx3060ti", precio:15000},
    {nombre: "intel-i5", precio:12000},
    {nombre: "volante logitech", precio:150000},
]

let carrito = []

function pregunta(){
    let elegi = prompt("Desea ver que productos tenemos en stock? si o no");
        while(elegi != "si" && elegi != "no"){
            alert("por favor ingrese si o no")
            elegi = prompt("Desea ver que productos tenemos en stock? si o no");

        }
        if(elegi == "si"){
            alert("Poseemos en stock los siguientes productos:")
            let mostrarProductos = productos.map((producto) => producto.nombre.toUpperCase() + " " + producto.precio + "$")
            alert(mostrarProductos.join(" | "))
            return true
        }else if(elegi == "no"){
            alert("Gracias por visitarnos vuelva prontos")
            return false
        }
}


function agregarAlCarrito(producto){
    carrito.push(producto)
}


function comprar() {
    if(pregunta()){
        let pregunta2 = confirm("Desea comprar algo?")
        while(pregunta2 === true){
            let buscador = prompt("ingrese el producto que desea comprar").trim().toUpperCase()
        let resultado = productos.filter((producto) => producto.nombre.toUpperCase().includes(buscador))
        if(resultado.length > 0){
            console.table(resultado) // nose porque algunos resultados si me los muestra como table y otros no
            resultado.forEach((producto)=> agregarAlCarrito(producto))
            console.table(carrito)
            
        }else{
            alert("no se encontro ninguna coincidencia con: " + buscador)
        }
        pregunta2 = confirm("Desea comprar algo más?")
        }
        
    }
}

comprar()



const total = carrito.reduce((x,y) =>x + y.precio, 0)
alert("el total a pagar es: $" + total)
