import React from 'react';

const notFound = {
    padding: '5rem',
    textAlign: 'center',
    maxWidth: '60rem',
    margin: 'auto'
}

class Home extends React.Component {
    render() {
        return (
            <div style = {notFound}>
                <h1>Huh that's strange, the page you're looking for doesn't seem to exist</h1>
                <h2>The way I'm looking at it, there are two scenarios</h2>
                <h3>A) You made a typo or clicked a bad link to this website, check the url</h3>
                <h3>B) You were looking for something that doesn't exist yet, maybe a project that you want to work on with me? (Message me on linkedin if you want to collaborate on something :)</h3>
            </div>
        );
    }
}

export default Home;