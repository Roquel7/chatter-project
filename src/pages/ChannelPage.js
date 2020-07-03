import React, { Component } from 'react'

import SideMenu from '../components/SideMenu'
import DisplayChannel from '../components/DisplayChannel'

class ChannelPage extends React.Component {
    state = {
        selectedChannel: null
    }

    selectChannel = channel => {
        this.setState({ selectedChannel: channel })
    }

    unselectChannel = () => {
        this.setState({
            selectedChannel: null
        })
    }


    render() {
        return (
            <div className="ui grid">
                <div className="six wide column">   
                    <SideMenu selectChannel={this.selectChannel} />
                </div>
                <div className="six wide column">
                    <DisplayChannel channel={ this.state.selectedChannel } unSelect = {this.unselectChannel} />
                </div>
            </div>
        )
    }
}

export default ChannelPage 