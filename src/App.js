import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function App() {
    return (
        <Router>
            <div>
                {/*<div className="menu">*/}
                {/*    <Link to="/">Home</Link>*/}
                {/*    <Link to="/about">About</Link>*/}
                {/*</div>*/}
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                alt=""
                                src="/logo.svg"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            React Bootstrap
                        </Navbar.Brand>
                    </Container>
                </Navbar>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;