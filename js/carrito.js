// FUNCION DE CARRITO

const pintarCarrito = () => {

    modalContainer.innerHTML = ``;

    modalContainer.style.display ="flex";

    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
        <h2 class="modal-header-title">Carrito</h2>
    `;
modalContainer.append(modalHeader);

const modalButton = document.createElement("h4");
modalButton.innerText = "x";
modalButton.className = "modal-header-button";

modalButton.addEventListener("click", () => {
    modalContainer.style.display = "none";
})


modalHeader.append(modalButton);

carrito.forEach((product) => {
    let carritoContent = document.createElement("div")
    carritoContent.className = "modal-content"
    carritoContent.innerHTML = `
    <img src="${product.imagen}">
    <h3>${product.nombre}</h3>
    <p>$ ${product.precio}</p>
    <span class="restar"> - </span>
    <p>Cantidad: ${product.cantidad}</p>
    <span class="sumar"> + </span>
    <p>Total: ${product.cantidad * product.precio}</p>
    <span class="delete-product"> ❌ </span>
    `;

    modalContainer.append(carritoContent);


    let restar = carritoContent.querySelector(".restar")

    restar.addEventListener("click", () =>{
        product.cantidad = product.cantidad > 1 ? product.cantidad - 1 : product.cantidad;
        carritoCounter()
        saveLocal();
        pintarCarrito()
    })


let sumar = carritoContent.querySelector(".sumar")
sumar.addEventListener("click", () => {
    product.cantidad++;
    carritoCounter()
    saveLocal();
    pintarCarrito()
})


    // ELIMINAR DEL CARRITO

let eliminar = carritoContent.querySelector(".delete-product")

eliminar.addEventListener("click", ()=> {
    eliminarProducto(product.id);
    
})


});

    // TOTAL DEL CARRITO

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `Total a pagar: $ ${total}`;
    modalContainer.append(totalBuying)


}

verCarrito.addEventListener("click", pintarCarrito)



const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    })

carritoCounter();
saveLocal();
pintarCarrito();

};


// CONTADOR DEL CARRITO

const carritoCounter = () => {
    cantidadCarrito.style.display = "block";

    const totalCantidadProductos = carrito.reduce((acc, el) => acc + el.cantidad, 0);

    localStorage.setItem("carritoCantidad", JSON.stringify(totalCantidadProductos));

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoCantidad"));
}

carritoCounter()
