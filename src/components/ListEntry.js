import React from 'react';

const divStyle = {
    display: 'flex',
    flexDirection: 'row'
};

const heading = {
    width: '10rem',
    padding: '1rem'
}

const description = {
    width: '100%',
    borderLeft: 'solid #121212 1rem',
    padding: '1rem',
    textAlign: 'justify',
    marginBottom: '0'
}

class ListEntry extends React.Component {
    render() {
        return (
            <div style={divStyle}>
                <h3 style={heading}>{this.props.heading}</h3>
                <div style={description}>
                    <h4>{this.props.supertitle}</h4>
                    <h5>{this.props.title}</h5>
                    <h6>{this.props.subtitle}</h6>
                    <p>{this.props.content}</p>
                </div>
            </div>
        )
    }
}

export default ListEntry;