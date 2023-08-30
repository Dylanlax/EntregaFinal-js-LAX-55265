
// Cartel bienvenida


/* const cartelito = () => {
    (async() => {
        const { value: email } = await Swal.fire({
    title: 'Ingrese su mail para recibir las ultimas novedades',
    input: 'email',
    inputLabel: 'Ingrese su mail',
    inputPlaceholder: 'Enter your email address'
})

if (email) {
    Swal.fire(`Entered email: ${email}`)
}
    })()
}

setTimeout(cartelito,500) */


const shopContent = document.getElementById("shopContent")
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modal-container")


const productos = [{ nombre: "PROCESADOR INTEL I5 11400", precio: 100000, imagen: "img/procesador intel i5.jpg", id:1},
    {nombre: "PROCESADOR AMD RYZEN 5 4500", precio: 100000, imagen: "img/ryzen 5 4500.jpg", id: 2},
    {nombre: "Grafica rtx3060ti", precio: 250000, imagen: "img/3060ti.png", id: 3},
    {nombre: "PROCESADOR INTEL CELERON", precio: 50000, imagen: "img/intel celeron.jpg", id: 4},
    {nombre: "GRAFICA RX 580", precio: 100000, imagen: "img/rx580.jpg", id: 5}
]


// Variable de carrito
let carrito = []

//INYECCION DE PRODUCTOS

productos.forEach((product)=> {
    let content = document.createElement("div");
    content.className = "card1";
    content.innerHTML = `
        <img src="${product.imagen}">
        <h3>${product.nombre}</h3>
        <p class="price">$ ${product.precio}</p>
    `;


    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";

    content.append(comprar);


    comprar.addEventListener("click", () =>{
        carrito.push({
            id: product.id,
            imagen: product.imagen,
            nombre: product.nombre,
            precio: product.precio,
        })
        console.log(carrito)
    })
});


// FUNCION DE CARRITO

verCarrito.addEventListener("click", () => {

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
    `;

    modalContainer.append(carritoContent)
});

    // TOTAL DEL CARRITO

    const total = carrito.reduce((acc, el) => acc + el.precio, 0)

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `Total a pagar: $ ${total}`;
    modalContainer.append(totalBuying)
});

