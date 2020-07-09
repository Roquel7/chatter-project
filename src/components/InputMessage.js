import React from 'react'

class InputMessage extends React.Component {
    state = {
        message: ''
    }

    handleChange = event => {
        this.setState({
            message: event.target.value
        })
    }

    submitMessage = event => {
        event.preventDefault()
        if (this.state.message) {
            this.props.submit(this.state.message)
            this.setState({
                message: ''
            })
            console.log(this.state.message)
        }
    }

    render() {
        return (
            <div className='message-input'>
               <form onSubmit={ this.submitMessage }>
                    <div className="ui transparant icon input" >
                        <input 
                            onChange={ this.handleChange} 
                            value={ this.state.message}
                            type="text" 
                            placeholder="message"  

                        />
                        <i className=" large arrow alternate circle right outline icon"></i>
                    </div>
                </form>
            </div>
        )
    }
}

export default InputMessage