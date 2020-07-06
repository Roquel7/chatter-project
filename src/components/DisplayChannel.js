import React from 'react'
import { deleteChannel } from '../helpers/db'

import { addChannelMessage } from '../helpers/db'
import { db } from '../services/firebase'


class DisplayChannel extends React.Component {

    deletingChannel = () => {
        deleteChannel(this.props.channel.id)
        this.props.unSelect()
    }

    state = {
        messages: [],        
        newMessage: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addingMessage = async event => {
        event.preventDefault()
        try {
            if (this.state.newMessage) {
                let response = await addChannelMessage({
                    text: this.state.newMessage,
                    userId: 'uNVA55gbllS5s0zCNhcf2pO4ANB3',
                    dateCreated: new Date(),
                    channelId: this.props.channel.id
                })
                this.setState({
                    newMessage: ''
                })
                console.log(response)
            } else {
                this.setState({
                    error: 'Please type'
                })
            }
        } catch(err) {
            console.log(err)
        }
    }

    renderMessages() {
        return this.state.messages.map(message => {
            return (
                <div key={message.id}>
                { message.text }    
                </div>
            )
        })
    }

    componentDidMount() {
        db.collection('messages')
            .onSnapshot(querySnapshot => {
                let messages = []
                querySnapshot.forEach(doc => {
                    let messageObject = {
                        id: doc.id,
                        ...doc.data()
                    }
                    messages.push(messageObject)
                    this.setState({
                        messages
                    })
                })
            })
    }

    render() {
        return this.props.channel ? (
            <div className="ui segment">
                <div  className="ui segment">
                    { this.props.channel.name }

                </div>
                <span onClick={ this.deletingChannel } className="left floated">
                <i className=" large trash icon" ></i>
                </span>

                <div>
                    { this.renderMessages() }
                    <form onSubmit={ this.addingMessage }>
                        <div className="item">
                            <div className="ui transparant icon input" >
                                <input 
                                    onChange={ this.handleChange} 
                                    value={ this.state.newMessage}
                                    name="newMessage"
                                    type="text" 
                                    placeholder="message"  

                                />
                                <i className=" large arrow alternate circle right outline icon"></i>
                            </div>
                        </div>
                    </form>
                </div>





            </div>

        ) : (
            <div className="ui segment">
                Select a Channel
            </div>
        )
    }
}

export default DisplayChannel
