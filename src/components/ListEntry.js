import React from 'react';
import './ListEntry.css'

class ListEntry extends React.Component {
    render() {
        return (
            <div className="Row">
                <h4 className="Heading">{this.props.heading}</h4>
                <div className="Description">
                    <h4>{this.props.supertitle}</h4>
                    <h5>{this.props.title}</h5>
                    <h6>{this.props.subtitle}</h6>
                    <i>{this.props.italicised}</i>
                    <p>{this.props.content}</p>
                </div>
            </div>
        )
    }
}

export default ListEntry;