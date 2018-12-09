import React from 'react';
var user = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
}

const Login = (props) => {
    return (
        <div>
            <div className="modal" id="login" tabindex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Please sign in below.</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={(e) => props.logIn(e)}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal" id="signup" tabindex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Please create an account</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label for="exampleInputFirst">First Name</label>
                                    <input type="text" onChange={(e) => props.setName(e)} className="form-control" id="exampleInputFirst" aria-describedby="lastHelp" placeholder="Enter first name"/>
                                    <small id="firstHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputLast">Last Name</label>
                                    <input type="text" onChange={(e) => props.setLast(e)} className="form-control" id="exampleInputLast" aria-describedby="astHelp" placeholder="Enter last name"/>
                                    <small id="lastlHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" onChange={(e) => props.setEmail(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" onChange={(e) => props.setPassword(e)} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={(e) => props.signUp(e)}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export default Login