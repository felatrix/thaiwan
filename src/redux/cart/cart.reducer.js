import CartTypes from './cart.types'

const INTIAL_STATE = {
    hidden: true
}

const cartReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case CartTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state
    }
}

export default cartReducer