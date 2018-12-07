import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Snacklist from './components/Snacklist'
import Footer from  './components/Footer'
import Snack from './components/Snack'


class App extends Component {
  
  constructor (props) {
    super();
    this.state ={
      loggedIn: false,
      data: []

    }
  }
  //for state data setting later
  async componentDidMount() {
    const response = await fetch('https://limitless-gorge-30293.herokuapp.com/snacks')
    const json = await response.json()
    this.setState({
      data:[...json]
    })
    console.log(this.state.data)
  }
  logIn = (e) => {
    e.preventDefault()
    console.log("login")
    !this.state.loggedIn ? this.setState({loggedIn: true}) : this.setState({loggedIn: true})
  }

  signUp = (e) => {
    e.preventDefault()
    console.log("signup")
    !this.state.loggedIn ? this.setState({loggedIn: true}) : this.setState({loggedIn: true})
  }

  submitReview = (e) => {
    e.preventDefault()
    this.state.loggedIn ? alert("review submitted") : alert("please log in first")
  }
  render() {
    return (
      <div className="App">
      
        <Navbar loggedIn={this.state.loggedIn} logIn={this.logIn} signUp={this.signUp}/>
        <Snacklist data={this.state.data} loggedIn={this.state.loggedIn} submitReview={this.submitReview}/>
        <Snack/>
        <Footer/>


      </div>
      
    );
  }
}

export default App;
