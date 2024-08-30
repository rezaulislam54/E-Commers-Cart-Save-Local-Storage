const geteStorCart = () =>{
    const storCart = localStorage.getItem('cart')
    if(storCart){
        return JSON.parse(storCart);
    }
    return [];
}

const savedCartStorage = (cart) =>{
    const cartString = JSON.stringify(cart);
    localStorage.setItem('cart', cartString);


}

const AddToStorage = (id) => {
    const storecart = geteStorCart();
    storecart.push(id);
    savedCartStorage(storecart);
    console.log(id);
}

const RemoveStorCart = (id) =>{
    const savedcart = geteStorCart();
    const Removed = savedcart.filter(data => data !== id);
    savedCartStorage(Removed);

}

export {AddToStorage, geteStorCart,RemoveStorCart}