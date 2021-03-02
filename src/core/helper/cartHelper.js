export const addItemToCart = (item, next) => {
    let cart = [];
    if(typeof window !== undefined) {
        if(localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem(cart));
        }
    }
    cart.push({
        ...cart,
        count: 1
    })
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
}

