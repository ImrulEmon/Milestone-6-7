
// -----4----show in display from local storage---
const displayLocalStorageCart=()=>{
    const cart = getCart();
    for(const name in cart){
        displayProduct(name,cart[name]);  //Important cart[name] to get the inside value
    }
}

// ----3.3------
const getCart = (name, price) => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};
    }
    return cartObj;
}

//-------3.1---------
const addProductToCart = (name, price) => {
    // -------3.2---------
    const cart = getCart();
    // -------3.4---------
    if (cart[name]) {
        cart[name]=cart[name]+price;
    }
    else{
        cart[name]=price;
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);

}
// ---------2.1--------display In UI----
const displayProduct = (name, price) => {
    const ul = document.getElementById("products");
    const li = document.createElement('li');
    li.innerText = `${name} : ${price}`;
    ul.appendChild(li);
}
// --------------------------
const addItem = () => {
    // --------first step-1
    const nameField = document.getElementById('name');
    const name = nameField.value;
    const priceField = document.getElementById('price');
    const price = Number(priceField.value);
    if (!name || !price) {
        return;
    }
    // -----2----Display in UI-----------
    displayProduct(name, price);
    // ------3----add to local storage-------
    addProductToCart(name, price);
    // ---------clearing input field--------
    priceField.value = '';
    nameField.value = '';
}

displayLocalStorageCart();