import React from 'react'

const MessageList = () => {
    return (
        <div className="item">
            <div className="ui transparant icon input" >
                    <input 
                        name="newMessage"
                        type="text" 
                        placeholder="message"  

                    />
                <i className=" large arrow alternate circle right outline icon"></i>
            </div>
        </div>
    )
}

export default MessageList