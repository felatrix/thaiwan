import React, { Component } from 'react'
import '../signInUp.styles.scss'
import {auth,cekUserAuth} from '../../../firebase/firebase.utils'


class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            authDaftar: {
                userDisplayName: "",
                userEmail: "",
                userPass: "",
                userPassConfirm: ""
            }
        }
    }
    handleChange = (e) => {
        var inputId = e.target.id
        var copyState = this.state.authDaftar
        var inputValue = e.target.value
        var newValue = { ...copyState, [inputId]: inputValue }
        this.setState({ authDaftar: newValue })
    }

    handleSubmit =async (e) => {
        e.preventDefault();
        this.setState({
            authDaftar: {
                userDisplayName: "",
                userEmail: "",
                userPass: "",
                userPassConfirm: ""
            }
        })
        const { userDisplayName, userEmail, userPass, userPassConfirm } = this.state.authDaftar

        if (userPass !== userPassConfirm) {
            alert('password beda')
            return
        }
        const displayName = userDisplayName
        const {user} =  await auth.createUserWithEmailAndPassword(userEmail,userPass)
        cekUserAuth(user,{displayName });
    }

    render() {
        return (
            <div className="signIn">
                <div className="title">
                    <h2>Udah punya akun ? langsung masuk aja !</h2>
                    <p>Dengan Email dan Password mu</p>
                </div>
                <div className="form formSignIn">
                    <form action="">
                        <div className="formGroup">
                            <input type="text" id="userDisplayName" value={this.state.authDaftar.userDisplayName} onChange={this.handleChange}></input>
                            <label htmlFor="userDisplayName">Display Name</label>
                        </div>
                        <div className="formGroup">
                            <input type="email" id="userEmail" value={this.state.authDaftar.userEmail} onChange={this.handleChange}></input>
                            <label htmlFor="userEmail">Email</label>
                        </div>
                        <div className="formGroup">
                            <input type="password" id="userPass" value={this.state.authDaftar.userPass} onChange={this.handleChange} ></input>
                            <label htmlFor="userPass">Password</label>
                        </div>
                        <div className="formGroup">
                            <input type="password" id="userPassConfirm" value={this.state.authDaftar.userPassConfirm} onChange={this.handleChange} ></input>
                            <label htmlFor="userPassConfirm">Password</label>
                        </div>
                        <div className="btnSignIn">
                            <button className="btnLogin" type="submit" onClick={this.handleSubmit}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}



export default SignUp