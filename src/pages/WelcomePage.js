import React from 'react'

import { Link } from 'react-router-dom'

const WelcomePage = () => {
    return (
        <div className="ui contatiner"> 
            Welcome! 
            <Link to="/login">Login</Link>
            
            <Link to="/signup">Sign Up</Link>
        </div>
    )
}

export default WelcomePage