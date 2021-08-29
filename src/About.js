import React from 'react';
import ListEntry from "./components/ListEntry";

const divStyle = {
    maxWidth: '50rem',
    margin: 'auto',
};

class About extends React.Component {
    render() {
        return (
            <div style={divStyle}>
                <ListEntry
                    heading="About"
                    // subtitle="Test"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum."
                > </ListEntry>
            </div>
        )
    }

}

export default About;