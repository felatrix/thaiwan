import React, { Component } from 'react';
import './App.css';

import Header from './components/header.component'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomePage from './components/Homepage.component' //component homepage
import ShopPage from './components/shoppage/shoppage.component'//shop page component
import SignInUp from './components/signInUp/signInUp.component' //untuk sign in dan up 
import { auth ,cekUserAuth} from '../src/firebase/firebase.utils';


class App extends Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unSubFromAuth = null

  componentDidMount() {
    this.unSubFromAuth = auth.onAuthStateChanged(async (user) => {
      // this.setState({ currentUser: user })
      // console.log(user)
      // cekUserAuth(user)
      if(user){
        const userProfile = await cekUserAuth(user)
        userProfile.onSnapshot(itemSnapshot =>{
          const isiSnapshot = itemSnapshot.data()
          this.setState({
            currentUser: {
              id: itemSnapshot.id,
              ...isiSnapshot
            }
          })
        })
      }
      this.setState({
        currentUser:user
      })
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


  render() {  
    return (
      <Router>
        <Header currentUser={this.state.currentUser} btnSignOut={this.handlerSignOutSementara} displayName={this.state.currentUser}/>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
        </Switch>
        <Switch>
          <Route path="/shop" component={ShopPage}></Route>
        </Switch>
        <Switch>
          <Route path="/signin" component={SignInUp}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
