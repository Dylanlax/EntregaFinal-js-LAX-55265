
const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(allProducts));
};

// Variable de carrito
let allProducts = []

const loadLocal = () => {
    const storedCart = localStorage.getItem("carrito");
    if (storedCart) {
        allProducts = JSON.parse(storedCart);
        
    }
};

loadLocal()

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
const rowProduct = document.querySelector(".row-product")




const valorTotal = document.querySelector('.total-pagar')

const countProducts = document.querySelector('#contador-productos')


listaDeProductos.addEventListener("click", i => {
    if(i.target.classList.contains("btn-add-cart")){
        const product = i.target.parentElement // LE PIDO QUE SI DOY CLICK EN BUTTON SELECCIONE EL PADRE DE LA CARD QUE CONTIENE ESE BUTTON


        
        
        const infoProduct = {
            quantity: 1,
            title: product.querySelector("p:first-of-type").textContent, // Le pido que lea el nombre del producto
            price: product.querySelector("p:nth-of-type(2n)").textContent, // le pido que lea el precio del producto

        }

        const exits = allProducts.some(product => product.title === infoProduct.title)

        if (exits) {
            const products = allProducts.map(product => {
                if(product.title === infoProduct.title){
                    product.quantity++
                    return product
                } else {
                    return product // ESTO ES PARA SUMAR EL CONTADOR DE QUANTITY
                }
            })
            allProducts = [...products]
        } else {
            allProducts = [...allProducts, infoProduct]
        }

        
        saveLocal()
        showHTML()
        
    }
})



// Funcion para localstorage


//set item







// funcion de carrito

const btnCart = document.querySelector('.container-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})


// para eliminar del carrito

rowProduct.addEventListener('click', (e) => {
    if(e.target.classList.contains('icon-close')){
        const product = e.target.parentElement
        const title = product.querySelector('p').textContent


        allProducts = allProducts.filter( product => product.title !== title);

    saveLocal()
        showHTML()
        
    }   
})




const showHTML = () => {


    

    // Limpiar html

    rowProduct.innerHTML= '';


    // total del carrito

    let total = 0;
    let totalOfProducts = 0;



    allProducts.forEach(product => {
        const containerProduct = document.createElement("div")
        containerProduct.classList.add("cart-product")

        containerProduct.innerHTML=`
        

    <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        
        `

        rowProduct.append(containerProduct);

        

        // para actualizar el valor

        total = total + parseInt(product.quantity * product.price.slice(1));
    
        totalOfProducts = totalOfProducts + product.quantity;
        
    });

valorTotal.innerText = `$${total}`;

countProducts.innerText = totalOfProducts;

saveLocal();


}

showHTML()