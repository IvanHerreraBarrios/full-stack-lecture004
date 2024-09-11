/**
 * Add products to the HTML.
 */

function add() {
    let title = document.getElementById("title");
    let price = document.getElementById("price");

    if (title.value !== '' && price.value !== '') {
       addSesionStorage();
    }else {
        alert("Ypu must complete the fields.")
    }

    
}

/**
 * Add article to sesionStorage
 * Pre: Title and price are not null
 */

function addSesionStorage(){
    let title = document.getElementById("title");
    let price = document.getElementById("price");
    let products = sessionStorage.getItem('products');


    let product = {
        id: 0,
        title: title.value,
        price: price.value,
    };
    //!=0
    if (products) {
        products = JSON.parse(products);
        products.push(product);
    } else {
        products = [product];
    }

    product.id = products.length;

    updateDiv();

    title.value = "";
    title.price = "";

    sessionStorage.setItem('products', JSON.stringify(products));
}
function updateDiv() {

    let products = JSON.parse(sessionStorage.getItem('products'));

    let div = document.getElementById('events');
    div.innerHTML = ``;

    for (let product of products) {
        div.innerHTML += `id: ${product.id}, Title ${product.title}, Price: ${product.price}, delete <br>`;
    }
}

/*
let btnAdd = document.getElementById('add');
btnAdd.onclick = add;
*/