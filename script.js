let cartDropdown = document.getElementById('cartDropdown');

function openCartDropdown(){
    cartDropdown.classList.toggle('d-none')
}




let listOfProducts = document.getElementById('cart')
function addtocart(){
    let product_img = document.getElementsByClassName('product_img')
    let product_name = document.getElementsByClassName('product_name')
    let product_price = document.getElementsByClassName('product_price')

    

    console.log(product_price);
    console.log(product_name);
    console.log(product_img);
}
