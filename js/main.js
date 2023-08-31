
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


/* const productos =  */


// Variable de carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getProducts = async () => {
    const response = await fetch("data.json");
    const data = await response.json();

    data.forEach((product)=> {
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

            if (modalContainer.style.display === "flex") {
                pintarCarrito();
            }

            Toastify({
                text: "Producto agregado!",
                duration: 3000,
                newWindow: true,
                close: false,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                background: "lightgreen",
                color: "black",
                },
                onClick: function(){} // Callback after click
            }).showToast();

            /* console.log(carrito) */
            carritoCounter()
            saveLocal()
        })
    });
}


getProducts()
//INYECCION DE PRODUCTOS




// set item

const saveLocal = () =>{
    localStorage.setItem("carrito", JSON.stringify(carrito))
}




