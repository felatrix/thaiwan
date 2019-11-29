import React, { Component } from 'react'
import './signInUp.styles.scss'
import SignIn from './signIn/signIn.component'
import SignUp from './signUp/signUp.component'

class SignInUp extends Component {
  
    render() {
        return (
            <div className="signInContainer">
                
                <SignIn/>
                <SignUp/>
                {/* <div className="signUp">
                    <div className="title">
                        <h2>Belum punya akun ? langsung daftar aja !</h2>
                    </div>
                    <div className="form formSignIn">
                        <form action="">
                            <div className="formGroup">
                                <input type="email" id="userEmail" value={this.state.auth.userEmail} onChange={this.handleChange}></input>
                                <label htmlFor="email">Display Name</label>
                            </div>
                            <div className="formGroup">
                                <input type="email" id="userEmail" value={this.state.auth.userEmail} onChange={this.handleChange}></input>
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="formGroup">
                                <input type="password" id="userPass" value={this.state.auth.userPass} onChange={this.handleChange} ></input>
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="formGroup">
                                <input type="password" id="userPass" value={this.state.auth.userPass} onChange={this.handleChange} ></input>
                                <label htmlFor="password">Confirm Password</label>
                            </div>
                            <div className="btnSignIn">
                                <button className="btnLogin" type="submit" onClick={this.handleSubmit}>Daftar</button>
                                <button className="btnLogin" onClick={this.handleGoogleLogin}>Sign In With Google</button>

                            </div>
                        </form>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default SignInUp

