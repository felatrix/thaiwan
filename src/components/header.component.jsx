import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'
import { auth } from '../firebase/firebase.utils'

const Header = ({ currentUser, btnSignOut, displayName }) => {
    console.log('header display name', displayName)
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
                    {displayName !== null ? (<li>
                        <div className="linkNavbar">Halo, {displayName.displayName}</div>
                    </li>) : null

                    }

                    <li>
                        {
                            currentUser ? (<div class="linkNavbar" onClick={() => auth.signOut()}> SIGN OUT </div>) :
                                (<Link class="linkNavbar" to="/signin"> SIGN IN </Link>)
                        }

                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header