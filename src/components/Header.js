import React from 'react'
import { NavLink } from 'react-router-dom'

import { signout } from '../helpers/auth'

const Header = props => {
    return (
        <div className="ui inverted segment">
            <div className="ui inverted secondary pointing menu">
                <NavLink exact to ="/" className="item" activeClassName="active">
                    Home
                </NavLink>
                <NavLink exact to ="/profile" className="item" activeClassName="active">
                    Profile
                </NavLink>
                <NavLink exact to ="/channels" className="item" activeClassName="active">
                    Channels
                </NavLink>
                <NavLink exact to ="/info" className="item" activeClassName="active">
                    Info
                </NavLink>
                <div className="right menu">
                    {props.authenticated ? (
                        <button className="ui small blue button" onClick={signout}>
                            Log Out
                        </button>
                    ) : null }
                </div>
            </div>
        </div>
    )
}

export default Header