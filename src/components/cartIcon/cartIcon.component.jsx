import React from 'react'
import {ReactComponent as ShopingCart} from './cartIcon.svg'
import './cart-icon.styles.scss'

import {connect} from 'react-redux'
import toggleCartHiddenAction from '../../redux/cart/cart.action'

const CartIcon = ({toggleCartHidden}) =>{
    console.log("dari komponen carticon",toggleCartHidden)
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShopingCart className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}
const mapDispatchToProps = (dispatch)=>{
    return ({
        toggleCartHidden:()=>dispatch(toggleCartHiddenAction())
    })
}

export default connect(null,mapDispatchToProps)(CartIcon)