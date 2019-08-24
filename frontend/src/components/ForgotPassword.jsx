import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ForgotPassword extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            newPassword: "",
            sendStatus: false
        }
    }

    equalPasswords() {
        const current = this.state;
        const inputedPassword = current.password;
        const inputedNewPassword = current.newPassword;

        return inputedPassword === inputedNewPassword ? true : false
    }

    checkingDatas() {
        if (this.equalPasswords() === false)
            return (
                <div class="alert alert-danger" role="alert">
                    Passwords wrong!
          </div>)

        if (this.equalPasswords() === true)
            return (<div></div>)

    }

    handleSend() {

        if (this.state.sendStatus === true)
            return (
                <div class="alert alert-success" role="alert">
                    Check your Email!
          </div>
            )
    }

    render() {
        return (
            <div className="registerPlace d-grid container-fluid">
                <div className="formArea row justify-content-center">
                    <form className="forms col-12">
                        <div className="form-group">
                            <h1 className="mt-2">Redefine Password</h1>
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email"
                                onChange={(e) => this.setState({ email: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <label>New Password</label>
                            <input type="password" className="form-control" placeholder="Password"
                                onChange={(e) => this.setState({ password: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" className="form-control" placeholder="Repeat password"
                                onChange={(e) => this.setState({ newPassword: e.target.value })} />
                            <div>{this.checkingDatas()}</div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="sendButton col-12 mt-3 mb-2 btn btn-primary"
                                onClick={(e) => this.setState({ sendStatus: true })}>Send</button>
                            <div>{this.handleSend()}</div>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}