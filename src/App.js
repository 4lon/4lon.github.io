import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import ProjectsPage from "./components/ProjectsPage";
import Navigation from './components/navigation/Navigation';
import HomePage from "./components/homepage/HomePage";

function App() {
  return (
    <HashRouter basename='/'>
     <div>
      <Navigation/>
      <Route exact path="/" component={HomePage} />
      <Route path="/projects" component={ProjectsPage} />
     </div>
    </HashRouter>
   );
}

export default App;