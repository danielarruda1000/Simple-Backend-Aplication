import React, { Component } from 'react'
import './Register.css'

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password:"",
      confirmPassword: ""
    }
    
    this.equalPasswords = this.equalPasswords.bind(this);
    this.checkingDatas = this.checkingDatas.bind(this);
  }

  equalPasswords(){
    const current = this.state;
    const inputedPassword = current.password;
    const inputedConfirmPassword = current.confirmPassword;

    return inputedPassword === inputedConfirmPassword ? true: false
  }

 checkingDatas(){
    if(this.equalPasswords() === false)
      return(
      <div class="alert alert-danger" role="alert">
        Passwords wrong!
      </div>)

      if(this.equalPasswords()===true)
      return(<div></div>)
      
  }

  render() {
    return (
      <div className="registerPlace d-grid container-fluid">
        <div className="formArea row justify-content-center">
          <form className="forms col-12">
            <div className="form-group">
              <h1 className="mt-2">Sign Up</h1>
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" placeholder="Enter email"
                onChange= {(e)=> this.setState({email: e.target.value})} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Password"
                onChange= {(e)=> this.setState({password: e.target.value})}/>
            </div>
            <div className="form-grup">
              <label>Confirm Password</label>
              <input type="password" className="form-control" placeholder="Repeat password"
                onChange={(e)=> this.setState({confirmPassword: e.target.value})}/>
                <div>{this.checkingDatas()}</div>
            </div>
            <button type="submit" className=" col-12 mt-3 mb-2 btn btn-primary">Register Now!</button>
          </form>
        </div>
      </div>
    );
  }
}