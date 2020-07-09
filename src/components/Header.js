import React from 'react'
import { NavLink } from 'react-router-dom'

import { signout } from '../helpers/auth'

import { connect } from 'react-redux'

const Header = props => {
    return (
        <div className="ui  segment">
            <div className="ui  secondary pointing menu">
                <NavLink exact to ="/" className="item" activeClassName="active">
                    Home
                </NavLink>
                <NavLink exact to ="/profile" className="item" activeClassName="active">
                    Profile
                </NavLink>
                <NavLink exact to ="/channels" className="item" activeClassName="active">
                    Channels
                </NavLink>

                <div className="right menu">
                    {props.authenticated ? (
                        <div>
                            {/* { props.user.displayName }
                            <img className="ui avatar image" src={ props.user.photoURL } /> */}
                            <div>
                                <button className="ui small blue button" onClick={signout}>
                                    Log Out
                                </button>
                            </div>
                        </div>
                        

                    ) : null }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    let { displayName, photoURL } = state.user || {}
    return {
      user: {
        displayName,
        photoURL
      }
    }
  }

export default connect(mapStateToProps)(Header)