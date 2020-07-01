import React from 'react'
import { Link } from 'react-router-dom'
import { signup, signInWithGoogle } from '../helpers/auth'

class SignUpPage extends React.Component {
    state = {
        email: '',
        password: '',
        error: ''
    }

    handleSubmit = async event => {
        event.preventDefault()
        try {
            let { email, password } = this.state
            await signup(email, password)
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
        this.setState({
            error: err.message
        })
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="ui container">
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <div>
                        <h1>Sign Up</h1>
    
                        <input
                            placeholder="Email"
                            type="email"
                            name="email" 
                            onChange={ this.handleChange }
                            value={ this.state.email}
                            />
                        <input
                            placeholder="Password"
                            type="password"
                            name="password" 
                            onChange={ this.handleChange }
                            value={ this.state.password}
                            />
                    </div>

                    <button className="ui fluid primary basic button" type="submit">Sign up</button>

                    <div>
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUpPage