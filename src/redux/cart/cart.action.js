import CartType from "./cart.types";

const toggleCart = ()=>{
    return({
        type:CartType.TOGGLE_CART_HIDDEN
    })
}

export default toggleCart