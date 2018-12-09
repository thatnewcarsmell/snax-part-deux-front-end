import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Snacklist from './components/Snacklist'
import Footer from  './components/Footer'
import Snack from './components/Snack'


class App extends Component {
  
  constructor (props) {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      password: "",
      loggedIn: false,
      data: []
    }
  }

  componentDidMount() {
    fetch('https://limitless-gorge-30293.herokuapp.com/snacks')
      .then(res => res.json())
      .then(res =>
        this.setState({
          data: [...res]
         })
      )
  }

  logIn = (e) => {
    e.preventDefault()
    console.log("login")
    !this.state.loggedIn ? this.setState({ loggedIn: true }) : this.setState({ loggedIn: true })
  }

  signUp = (e) => {
    e.preventDefault()
    fetch('https://limitless-gorge-30293.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email_address: this.state.emailAddress,
        password: this.state.password
      })
    })
    !this.state.loggedIn ? this.setState({loggedIn: true}) : this.setState({loggedIn: true})
  }

  setName = (e) => {
    e.preventDefault()
    this.setState({firstName: e.target.value})
  }

  setLast = (e) => {
    e.preventDefault()
    this.setState({lastName: e.target.value})
  }

  setEmail = (e) => {
    e.preventDefault()
    this.setState({emailAddress: e.target.value})
  }

  setPassword = (e) => {
    e.preventDefault()
    this.setState({password: e.target.value})
  }

  submitReview = (e) => {
    e.preventDefault()
    this.state.loggedIn ? alert("review submitted") : alert("please log in first")
  }

  render() {

    return (
      <div className="App">
      
        <Navbar setName={this.setName} setLast={this.setLast} setEmail={this.setEmail} setPassword={this.setPassword} loggedIn={this.state.loggedIn} logIn={this.logIn} signUp={this.signUp}/>
        <Snacklist data={this.state.data} loggedIn={this.state.loggedIn} submitReview={this.submitReview}/>
        <Snack/>
        <Footer/>

      </div>
    );
  }
}

export default App;
