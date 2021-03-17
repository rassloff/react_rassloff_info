import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
  
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import HelloWorld from './components/HelloWorld';
import KursListe from './components/KursListe';
import KursListe2 from './components/KursListe2';
import ShowUsers from './components/ShowUsers';

class BootstrapNavbar extends React.Component{

    render(){
        return(
            <div fixed="top" >
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top" fixed="top" >
                                <Navbar.Brand href="/">React Bootstrap Navbar</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <NavDropdown title="Kurs" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/hello-world">Hello World</NavDropdown.Item>

                                        <NavDropdown.Item href="/kurs-liste">Kurs Liste</NavDropdown.Item>
                                        <NavDropdown.Item href="/kurs-liste-2">Kurs Liste 2</NavDropdown.Item>
                                        <NavDropdown.Item href="/show-users">Show Users</NavDropdown.Item>

                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                    </Nav>
                                    <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-success">Search</Button>
                                    </Form>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route path="/about-us">
                                    <AboutUs />
                                </Route>
                                <Route path="/contact-us">
                                    <ContactUs />
                                </Route>
                                <Route path="/hello-world">
                                    <HelloWorld />
                                </Route>
                                <Route path="/kurs-liste">
                                    <KursListe />
                                </Route>
                                <Route path="/kurs-liste-2">
                                    <KursListe2 />
                                </Route>
                                <Route path="/show-users">
                                    <ShowUsers />
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )  
    }
}

export default BootstrapNavbar;