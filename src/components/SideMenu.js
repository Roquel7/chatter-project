import React from 'react'

import { NavLink } from 'react-router-dom'

class SideMenu extends React.Component {
    render() {
        return (
            <div className="ui secondary vertical menu">
                <a className="active item">
                    Account
                </a>
                <a className="item">
                    Settings
                </a>
                <div className="ui dropdown item">
                    <i className="dropdown icon"></i>
                    Display Options
                    <div className="menu">
                    <div className="header">Text Size</div>
                    <a className="item">Small</a>
                    <a className="item">Medium</a>
                    <a className="item">Large</a>
                    </div>
                </div>
                <a className="item">
                    Test
                </a>
                <div className="item">
                    <input 
                        type="text" 
                        className="item" 
                        placeholder="Add Channel" 
                        />
                                        <i className="plus icon"></i>

                </div>

            </div>
        )
    }
} 

export default SideMenu