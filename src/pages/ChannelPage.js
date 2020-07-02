import React, { Component } from 'react'

import SideMenu from '../components/SideMenu'

class ChannelPage extends React.Component {
    state = {
        selectedChannel: null
    }

    selectChannel = channel => {
        this.setState({ selectedChannel: channel })
    }


    render() {
        return (
            <div className="ui grid">
                <div className="six wide column">   
                    <SideMenu selectChannel={this.selectChannel} />
                </div>
                <div className="six wide column">
                    {/* <ChannelDisplay channel={ this.state.selectedChannel } unSelect = {this.unSelectChannel} /> */}
                </div>
            </div>
        )
    }
}

export default ChannelPage 