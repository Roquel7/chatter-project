import React from 'react'
import { deleteChannel } from '../helpers/db'

class DisplayChannel extends React.Component {

    deletingChannel = () => {
        deleteChannel(this.props.channel.id)
        this.props.unSelect()
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
            </div>
        ) : (
            <div className="ui segment">
                Select a Channel
            </div>
        )
    }
}

export default DisplayChannel