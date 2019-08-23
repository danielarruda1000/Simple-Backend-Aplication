import React, { Component} from 'react'
import {Link} from 'react-router-dom'
import './Login.css'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    render() {
        return (
            <div className="registerPlace d-grid container-fluid">
                <div className="formArea row justify-content-center">
                    <form className="forms col-12">
                        <div className="form-group">
                            <h1 className="mt-2">Sign In</h1>
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email"
                                onChange={(e)=> this.setState({email: e.target.value})}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Password"
                                onChange={(e) => this.setState({ password: e.target.value })} />
                        </div>
                        <div className="form-grup row">
                            <div className="col-sm-12 col-md-6">
                                <Link to="/register"><small>Register</small></Link>
                            </div>
                            <div className="col-sm-12 col-md-6 ">
                                <a href=""><small>Forgot password?</small></a>
                            </div>
                        </div>
                        <button type="submit" className=" col-12 mt-3 mb-2 btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        );
    }
}