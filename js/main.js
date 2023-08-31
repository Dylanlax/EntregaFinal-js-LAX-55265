
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
const cantidadCarrito = document.getElementById("cantidadCarrito")


const productos = [{ nombre: "PROCESADOR INTEL I5 11400", precio: 100000, imagen: "img/procesador intel i5.jpg", id:1, cantidad: 1,},
    {nombre: "PROCESADOR AMD RYZEN 5 4500", precio: 100000, imagen: "img/ryzen 5 4500.jpg", id: 2, cantidad: 1,},
    {nombre: "Grafica rtx3060ti", precio: 250000, imagen: "img/3060ti.png", id: 3, cantidad: 1,},
    {nombre: "PROCESADOR INTEL CELERON", precio: 50000, imagen: "img/intel celeron.jpg", id: 4, cantidad: 1,},
    {nombre: "GRAFICA RX 580", precio: 100000, imagen: "img/rx580.jpg", id: 5, cantidad: 1,}
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

    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id)
        

    if (repeat){
        carrito.map((prod) => {
            if(prod.id === product.id) {
                prod.cantidad++;
            }
        });
    } else {

    
        carrito.push({
            id: product.id,
            imagen: product.imagen,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad,
        })}
        /* console.log(carrito) */
        carritoCounter()
    })
});


