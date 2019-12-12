import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'
import { auth } from '../firebase/firebase.utils'

import { connect } from 'react-redux'

import ShopingCart from './cartIcon/cartIcon.component'
import CartDropdown from './cartDropdown/cartDropdown.component'

const Header = ({ currentUser, hidden }) => {
    console.log("dari komponen",hidden)
    return (
        <div className="header">
            <Link className="titleHeader" to="/">
                <h1>ThaiWan</h1>
            </Link>

            <div className="navBar">
                <ul>
                    <li>
                        <Link class="linkNavbar" to="/shop">SHOP</Link>
                    </li>
                    <li>
                        <Link class="linkNavbar" to="/contact">
                            CONTACT
                        </Link>
                    </li>
                    {currentUser !== null ? (<li>
                        <div className="linkNavbar">Halo, {currentUser.displayName}</div>
                    </li>) : null

                    }

                    <li>
                        {
                            currentUser ? (<div class="linkNavbar" onClick={() => auth.signOut()}> SIGN OUT </div>) :
                                (<Link class="linkNavbar" to="/signin"> SIGN IN </Link>)
                        }
                    </li>
                    <li>
                        <ShopingCart />
                        {
                            hidden ? null : <CartDropdown />

                        }
                    </li>

                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => {
    return ({
        currentUser,
        hidden
    })
}
export default connect(mapStateToProps)(Header)