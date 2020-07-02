import React from 'react'

import { addChatterChannel } from '../helpers/db'
import { db } from '../services/firebase'


class SideMenu extends React.Component {

    state = {
        channels: [],
        newChannel: '',
        error: ''
    }

    addingChannels = async event => {
        event.preventDefault()
        try {
            if ( this.state.newChannel) {
                await addChatterChannel( this.state.newChannel, 'uNVA55gbllS5s0zCNhcf2pO4ANB3' )
                this.setState({
                    newChannel: ''
                })
            } else {
                this.setState({
                    error: 'You cannot add a blank channel'
                })
            }
        } catch(err) {
            console.log(err)
        }
    }

    componentDidMount() {
        db.collection('channels')
        .onSnapshot(querySnapshot => {
            let channels = []
            querySnapshot.forEach(doc => {
                let channelObject = {
                    id: doc.id,
                    ...doc.data()
                }
                channels.push(channelObject)
                this.setState({
                    channels
                })
            })
        })
    }

    renderChannels() {
        return this.state.channels.map(channel => {
            return (
                <div 
                    key={ channel.id }
                    className="item" 
                    onClick={ () => this.selectChannel(channel)} 
                >
                    {channel.name}
                </div>
            )
        })
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render() {
        return (
            <div className="ui secondary vertical menu">
                { this.renderChannels() }
                <form onSubmit={ this.addingChannels }>
                    <div className="item">
                        <div className="ui transparant icon input">
                            <input 
                                    name="newChannel"
                                    type="text" 
                                    className="item" 
                                    placeholder="Add Channel" 
                                    onChange={ this.handleChange }
                                    value={ this.newChannel }
                                />
                                <i className="plus icon"></i>
                            </div>
                    </div>
                </form>
            </div>
        )
    }
} 

export default SideMenu