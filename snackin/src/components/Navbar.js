import React from 'react';
import Login from './Login'

const Navbar = (props) => {
    return (
      <nav class="navbar navbar-light bg-secondary">
        <a class="navbar-brand" href="#">
          <img src="https://github.com/ninjames101/snax-part-deux/blob/master/snacks_logo.png?raw=true" height="35em" alt="logo"/>
        </a>
        <button type="button" class="btn btn-outline-light my-2 my-sm-0" data-toggle="modal" data-target="#login">
            Log in
        </button>
        <button type="button" class="btn btn-outline-light my-2 my-sm-0" data-toggle="modal" data-target="#signup">
            Sign up
        </button>
        <Login />
      </nav>
    )
  }
  
  export default Navbar