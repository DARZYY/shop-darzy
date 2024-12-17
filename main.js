let url = "https://my-json-server.typicode.com/Salamandra19977/marketplace"
let productArray = []
let productnGrid = document.getElementById("products-grid")
let cartProd = document.getElementById("cart-products")

function OpenCart() {
    cartProd.classList.toggle("hide")
}
fetch(url + "/products")
    .then(async function(response){
        let products  = await response .json()
        products.forEach(p => {
           console.log(p) 
           productArray.push(p)
            let productElement = document.createElement("div")
           productElement.classList.add('product')
            productElement.innerHTML = `
                <img id="image" src="${p.photo_url}">
                <h1>Product name:${p.product_name}</h1>
                <h2>Author id:${p.author_id}</h2>
                <h2>id:${p.id}</h2>
                <h6>${p.product_description}</h6>
                 <a href="profile.html?id=${p.author_id}">Profile</a>
                 <button onclick="addToCart(${p.id})">Kupit</button>
                
            `
            productnGrid.append(productElement)
        });


})
let cart = []

if(localStorage.getItem("cart")){
    cart = JSON.parse(localStorage.getItem("cart"))
    drawCartProducts()
}

function addToCart(id) {
    let Product = productArray.find(function(p){
    return p.id == id
    })
    cart.push(Product)
    localStorage.setItem("cart", JSON.stringify(cart))
    drawCartProducts()
}

function drawCartProducts(){
    cartProd.innerHTML = null
    sum = 0
    if (cart.length === 0 ) return cartProd.innerHTML = "Cart is empty"
    cart.forEach (function(p){
     if(!isNaN(p.price))  sum += +p.price
        cartProd.innerHTML += `
        <p>
    <img class="productImg" src="${p.photo_url}">
       | ${p.product_name} | ${p.price}
        </p>
        <hr>

    `
    })
    cartProd.innerHTML += `
    <p>Total price: ${sum}</p>
    <button onclick="buy()"></button>
    `
}

function buy() {
    cartProd.innerHTML = "Cart is empty"
    cart = []
    localStorage.setItem("cart", "[]")
}