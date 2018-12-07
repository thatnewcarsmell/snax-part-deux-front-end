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
      data: []
    }
  }
  //for state data setting later
  // async componentDidMount() {
  //   const response = await fetch('http://localhost:8082/api/messages')
  //   const json = await response.json()
  //   this.setState({
  //     email:[...json]
  //   })
  //   console.log(this.state.email)
  // }
  render() {
    return (
      <div className="App">
      
      <Navbar/>
      <Snacklist/>
      <Snack/>
      <Footer/>

      </div>
    );
  }
}

export default App;
