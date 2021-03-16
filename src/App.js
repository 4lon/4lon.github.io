import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import ProjectsList from "./components/projectsList/ProjectsList";
import Navigation from './components/navigation/Navigation';
import Home from "./components/homepage/Home";

function App() {
  return (
    <HashRouter basename='/'>
     <div>
      <Navigation/>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={ProjectsList} />
     </div>
    </HashRouter>
   );
}

export default App;