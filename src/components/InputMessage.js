import React from 'react'
import { addChannelMessage } from '../helpers/db'
import { db } from '../services/firebase'




class InputMessage extends React.Component {

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
                    channelId: this.channel.id
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

        console.log(this.state.newMessage)
    }

    renderMessages() {
        return this.state.messages.map(message => {
            return (
                <div>
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
        return (
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
        )
    }
}

export default InputMessage