import React, { Component } from 'react';
import './App.css';

//redux
import { connect } from 'react-redux'
import setCurrentUser from './redux/user/user.action'

import Header from './components/header.component'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import HomePage from './components/Homepage.component' //component homepage
import ShopPage from './components/shoppage/shoppage.component'//shop page component
import SignInUp from './components/signInUp/signInUp.component' //untuk sign in dan up 
import { auth, cekUserAuth } from '../src/firebase/firebase.utils';

class App extends Component {

  unSubFromAuth = null

  componentDidMount() {
    this.unSubFromAuth = auth.onAuthStateChanged(async (user) => {
      // this.setState({ currentUser: user })
      // console.log(user)
      // cekUserAuth(user)
      const { setCurrentUser } = this.props
      if (user) {
        const userProfile = await cekUserAuth(user)
        userProfile.onSnapshot(itemSnapshot => {
          const isiSnapshot = itemSnapshot.data()
          setCurrentUser({
            id: itemSnapshot.id,
            ...isiSnapshot
          })
        })
      }
      setCurrentUser(user)
    })

  }

  componentWillMount() {
    // this.unSubFromAuth() 
  }
  // handlerSignOutSementara(){
  //   this.unSubFromAuth = auth.onAuthStateChanged((user) => {
  //     this.setState({ currentUser: null })
  //   })
  // }
   testRedirect(){
    console.log('test')
  }


  render() {
    return (
      <Router>
        <Header btnSignOut={this.handlerSignOutSementara} />
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
        </Switch>
        <Switch>
          <Route path="/shop" component={ShopPage}></Route>
        </Switch>
        <Switch>
          {/* <Route exact path="/signin" component={SignInUp} render={() => this.props.currentUser ? <Redirect to="/" /> : <SignInUp />}></Route> */}
          <Route exact path="/signin"  render={()=>this.props.currentUser ? (<Redirect to="/" />): (<SignInUp/>)}></Route>
        </Switch>
      </Router>

    );
  }
}

const mapStateToProps = ({ user }) => {
  return ({
    currentUser: user.currentUser
  })
}

const mapDispatchToProps = dispatch => {
  return ({ setCurrentUser: user => dispatch(setCurrentUser(user)) })
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
