import React from 'react';

class Project extends React.Component {
    render() {
        const link = window.location.href
        const query = link.substring(link.indexOf('?') + 1)
        const proj = query.substring(query.indexOf('=') + 1)
        return (
            <div>
                <h1>{proj}</h1>
            </div>
        );
    }
}

export default Project;