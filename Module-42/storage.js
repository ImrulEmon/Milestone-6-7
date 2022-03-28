localStorage.setItem('userId',365689);

addToLocalStorage=()=>{
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;
    if(id&&value){
        localStorage.setItem(id,JSON.stringify(value));
    }
  
};

fromLocalStorage=()=>{
    const items = localStorage.getItem('cart');
    console.log(JSON.parse(items));
}

