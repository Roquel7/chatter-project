import React from 'react'

import { Link } from 'react-router-dom'
import { signin, signInWithGoogle } from '../helpers/auth'

class LoginPage extends React.Component {
    state = {
        email: '',
        password: '',
        error: ''
    }

    handleLogin = async (event) => {
        event.preventDefault()
        console.log(event)
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

    success() {
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
            <div>
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <div className="ui container">
                        <div>
                            <h1>Login</h1>
                            <input
                                placeholder="Email"
                                type="email"
                                name="email"
                                onChange={ this.handleChange}
                                value={ this.state.email }
                            />
                            <input
                                placeholder="Password"
                                type="password"
                                name="password"
                                onChange={ this.handleChange }
                                value={ this.state.passord }

                                />
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