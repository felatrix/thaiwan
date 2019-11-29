import React, { Component } from 'react'
import '../signInUp.styles.scss'
import { signInWithGoogle } from '../../../firebase/firebase.utils'


class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            auth: {
                userEmail: "",
                userPass: ""
            }
        }
    }
    handleChange = (e) => {
        var inputId = e.target.id
        var copyState = this.state.auth
        var inputValue = e.target.value
        var newValue = { ...copyState, [inputId]: inputValue }
        this.setState({ auth: newValue })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            auth: {
                userEmail: "",
                userPass: ""
            }
        })
    }
    handleGoogleLogin = (e) => {
        e.preventDefault();
        signInWithGoogle()
    }
    render(){
        return(
             <div className="signIn">
                    <div className="title">
                        <h2>Udah punya akun ? langsung masuk aja !</h2>
                        <p>Dengan Email dan Password mu</p>
                    </div>
                    <div className="form formSignIn">
                        <form action="">
                            <div className="formGroup">
                                <input type="email" id="userEmail" value={this.state.auth.userEmail} onChange={this.handleChange}></input>
                                <label htmlFor="email">Email</label>

                            </div>
                            <div className="formGroup">
                                <input type="password" id="userPass" value={this.state.auth.userPass} onChange={this.handleChange} ></input>
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="btnSignIn">
                                <button className="btnLogin" type="submit" onClick={this.handleSubmit}>Login</button>
                                <button className="btnLogin" onClick={this.handleGoogleLogin}>Sign In With Google</button>

                            </div>
                        </form>
                    </div>
                </div>
        )
    }

}

const SignIn2 = ({state,handleChange,handleSubmit,handleGoogleLogin})=>{
    return (
        <div className="signIn">
                    <div className="title">
                        <h2>Udah punya akun ? langsung masuk aja !</h2>
                        <p>Dengan Email dan Password mu</p>
                    </div>
                    <div className="form formSignIn">
                        <form action="">
                            <div className="formGroup">
                                <input type="email" id="userEmail" value={state.auth.userEmail} onChange={handleChange}></input>
                                <label htmlFor="email">Email</label>

                            </div>
                            <div className="formGroup">
                                <input type="password" id="userPass" value={state.auth.userPass} onChange={handleChange} ></input>
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="btnSignIn">
                                <button className="btnLogin" type="submit" onClick={handleSubmit}>Login</button>
                                <button className="btnLogin" onClick={handleGoogleLogin}>Sign In With Google</button>

                            </div>
                        </form>
                    </div>
                </div>
    )
}

export default SignIn