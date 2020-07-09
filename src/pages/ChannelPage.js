import React from 'react'
import { connect } from 'react-redux'
//components
import SideMenu from '../components/SideMenu'
import DisplayChannel from '../components/DisplayChannel'
import { selectChannel } from '../actions'

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
                    {/* <MessageList /> */}
                </div>
            </div>
        )
    }
}

export default connect(null, { selectChannel } )(ChannelPage) 

