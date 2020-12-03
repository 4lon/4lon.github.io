import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from './logo.svg';


const Navigation = () => {
   
   return (
       <div>
         <Navbar bg="light" sticky="top" expand="sm">
            <Navbar.Brand href="/"><img src={logo} padding="10" width="100" alt=""></img></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
            <Nav className="mr-auto">
               <Nav.Link id="navbar-link" href="/#/projects">Projects</Nav.Link>
               <Nav.Link id="navbar-link" href="https://github.com/4lon">GitHub</Nav.Link>
               <Nav.Link id="navbar-link" href="https://www.thingiverse.com/4lon/designs">Thingiverse</Nav.Link>
               <Nav.Link id="navbar-link" href="https://www.linkedin.com/in/AlonN">LinkedIn</Nav.Link>
            </Nav>
            </Navbar.Collapse>
         </Navbar>
      </div>
   );
}
 
export default Navigation;