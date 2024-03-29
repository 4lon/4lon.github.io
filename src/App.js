import './App.css';
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import logo from "./logo.svg";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Project from "./pages/Project";
import NotFound from './pages/NotFound';
import {Nav, Navbar, NavDropdown, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const navStyle = {
        paddingLeft: "3vw",
        paddingRight: "3vw",
        textAlign: "center",
    };

    return (
        <Router>
            <div>
                <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="100vh"
                                className="d-inline-block align-top"
                                alt="4lon logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#/about" style={navStyle}>About</Nav.Link>
                                <Nav.Link href="#/projects" style={navStyle}>Projects</Nav.Link>
                                <NavDropdown title="Technicals" id="collasible-nav-dropdown" style={navStyle}>
                                    <NavDropdown.Item href="https://github.com/4lon"
                                                      target="_blank" rel="noreferrer">Github</NavDropdown.Item>
                                    {/*<NavDropdown.Item href="https://www.thingiverse.com/4lon/designs" target="_blank" rel="noreferrer">Thingiverse</NavDropdown.Item>*/}
                                    {/*<NavDropdown.Item href="https://circuitmaker.com/User/Details/4lon" target="_blank" rel="noreferrer">CircuitMaker</NavDropdown.Item>*/}
                                    <NavDropdown.Item href="https://www.linkedin.com/in/alonn/"
                                                      target="_blank" rel="noreferrer">LinkedIn</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/projects">
                        <Projects/>
                    </Route>
                    <Route path="/project">
                        <Project/>
                    </Route>
                    <Route>
                        <NotFound/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;