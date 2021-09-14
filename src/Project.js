import React from 'react';

class Project extends React.Component {
    render() {
        let link = window.location.href
        link = link.split("/")
        let project = link[link.length - 1]
        return (
            <div>
                <h2>{project}</h2>
            </div>
        );
    }
}

export default Project;