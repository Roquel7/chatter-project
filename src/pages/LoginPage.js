import React from 'react'

import { Link } from 'react-router-dom'
import { signin, signInWithGoogle } from '../helpers/auth'
import { addNewUser } from '../helpers/db'


class LoginPage extends React.Component {
    state = {
        email: '',
        password: '',
        error: ''
    }

    handleLogin = async (event) => {
        event.preventDefault()
        try {
            let userResponse = await signInWithGoogle()
            this.success(userResponse)
        } catch(err) {
            this.error(err)
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        try {
            let { email, password } = this.state
            await signin(email, password)
            this.success()
        } catch(err) {
            this.error(err)
        }
    }

    success({ user, additionalUserInfo }) {
        if (additionalUserInfo && additionalUserInfo.isNewUser) {
            addNewUser(user)
        }
        console.log(' ', user)
        let { state } = this.props.location
        if (state && state.from) {
            this.props.history.push(state.from.pathname)
        } else {
            this.props.history.push('/')
        }
    }

    error(err) {
        console.log(err)
        alert('Email or Password is not correct')
        this.setState({
            error: err.message
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="ui container">
                <form className="ui form attached fluid segment" onSubmit={this.handleSubmit}>
                    <div>
                        <div>
                            <h1>Login</h1>
                            <div className="field">
                                <label>Email</label>
                            <input
                                placeholder="Email"
                                type="email"
                                name="email"
                                onChange={ this.handleChange}
                                value={ this.state.email }
                            />
                            </div>

                            <div className="field">
                                <label>Password</label>
                            <input
                                placeholder="Password"
                                type="password"
                                name="password"
                                onChange={ this.handleChange }
                                value={ this.state.passord }

                                />
                            </div>


                        </div>
                        
                        <button className="ui primary basic button " type="submit" >Login</button>
                        <button className="ui secondary basic button" type="submit" onClick={ this.handleLogin }> Login Using Google </button>

                        <div >
                            <p>Don't have an account? <Link to="/signup"> Sign Up!</Link> </p> 
                        </div>
                    </div>
                </form> 
            </div>


        )
    }
}

export default LoginPage