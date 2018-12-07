import React from 'react';
import Login from './Login'

const Navbar = (props) => {
    return (
      <nav className="navbar navbar-light bg-secondary">
        <a className="navbar-brand" href="#">
          <img src="https://github.com/ninjames101/snax-part-deux/blob/master/snacks_logo.png?raw=true" height="35em" alt="logo"/>
        </a>
        <div className="buttons">
          <button type="button" className="btn btn-outline-light login" data-toggle="modal" data-target="#login">
              Log in
          </button>
          <button type="button" className="btn btn-outline-light signup" data-toggle="modal" data-target="#signup">
              Sign up
          </button>
        </div>
        <Login logIn={props.logIn} signUp={props.signUp}/>
      </nav>
    )
  }
  
  export default Navbar