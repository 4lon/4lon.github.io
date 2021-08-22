import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Home';
import About from './About';

function App() {
    return (
        <Router>
            <div>
                <div className="menu">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </div>
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