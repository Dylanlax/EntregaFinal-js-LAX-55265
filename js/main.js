

function bienvenida(){
    let nombre = prompt("Ingrese su nombre")
    alert("Bienvenido a nuestro sitio " + nombre + "!")
}


bienvenida()

function edad(){
    let edad = prompt("Ingrese su edad")

        while (edad < 18) {
            alert("Usted necesita ser mayor a 18 años para poder ingresar");
            edad = prompt("Ingrese su edad nuevamente");
        }

    alert("usted cumple con la edad requerida para ingresar")
}

edad()


function descuentoGPU(){
    var aceptarOferta = confirm("Es usted usuario de Comprasxd? En caso de serlo cuenta con un descuento del 10%");
        if(aceptarOferta){
            alert("Contamos con una rtx1080ti a $9.000, con cuanto desea abonar?")
            return true // esto le dice al if de abajo si vuelve como true
    }else {
        alert("No se aplicara ningun descuento, el precio final de la rtx1080ti es $10.000")
        return false
    }
}





function calcularPrecio(precioOriginal, descuento){
    if(descuentoGPU()){
        var precioConDescuento = precioOriginal - (precioOriginal * descuento);
        return precioConDescuento

    }else {
        return precioOriginal
    }
}

var precio = calcularPrecio(10000, 0.10)

console.log("Precio final: " + precio)



function comprar1080ti(dinero){
    while(dinero <= precio){
        const dineroFaltante = precio - dinero;
        alert("dinero insuficiente, necesita $" + dineroFaltante + "más");
        dinero = prompt("Ingrese el monto a abonar nuevamente")
    
    }
    
    if(dinero>= precio) {
        const cambio = dinero - precio
        alert( "compra exitosa, su cambio es de $" + cambio)
        }
}

console.log(comprar1080ti(prompt("ingrese monto")))
