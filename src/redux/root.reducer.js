import {combineReducers} from 'redux'

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'

const Combine = combineReducers({
    user:userReducer,
    cart:cartReducer
})

export default Combine