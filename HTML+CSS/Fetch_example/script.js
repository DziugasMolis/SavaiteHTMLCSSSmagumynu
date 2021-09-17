fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => displayProducts(json));

let productsDiv = document.getElementById('products');
let loader = document.getElementById('loader');

function displayProducts(products) {
    console.log(products);
    for (let i = 0; i < products.length; i++) {
        let product = createProduct(products[i]);
        productsDiv.appendChild(product);
    }
    loader.style.display = 'none';
}

function createProduct(product) {
    const card = createCard();
    
    const img = createImage(product.image, product.description);
    card.appendChild(img);

    const h2 = createTitle(product.title);
    card.appendChild(h2);

    const price = document.createElement('p');
    price.classList.add('price');
    price.innerText = '$' + product.price;
    card.appendChild(price);

    const description = document.createElement('p');
    description.classList.add('description');
    description.innerText = product.description;
    description.title = product.description;
    card.appendChild(description);

    const button = document.createElement('button');
    button.innerText = 'Add to cart';
    button.onclick = function () {
        window.open('https://cataas.com/cat');
    }
    card.appendChild(button);
    
    return card;
}

function createCard() {
    const card = document.createElement('div');
    card.classList.add('card');
    return card;
}

function createImage(src, alt) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    return img;
}

function createTitle(title) {
    const h2 = document.createElement('h2');
    h2.innerText = title;
    h2.title = title;
    return h2;
}