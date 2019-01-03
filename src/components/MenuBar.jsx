import React from 'react';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';


/*react-sidenav*/
import SideNav, { Toggle, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


class TopMenuBar extends React.Component {

    render() {
        return (
            <div>

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Lemoney</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#features"
                                      style={{paddingLeft: 80}}>Features</Nav.Link>
                            <Nav.Link href="#pricing"
                                      style={{paddingLeft: 80}}>Pricing</Nav.Link>
                            <NavDropdown style={{paddingLeft: 80}}
                                         title="Dropdown"
                                         id="collasible-nav-dropdown">
                                <NavDropdown.Item
                                    href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another
                                    action</NavDropdown.Item>
                                <NavDropdown.Item
                                    href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated
                                    link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">Dank
                                memes</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Form inline>
                        <FormControl type="text" placeholder="Search"
                                     className="mr-sm-2"/>
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Navbar>


            </div>

        );
    }
}

export class MenuBar extends React.Component {

    render() {
        return (

            <div>


                <TopMenuBar />

                <SideNav
                    onSelect={(selected) => {
        // Add your code here
    }}
                >
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="home">
                        <NavItem eventKey="home">
                            <NavIcon>
                                <i className="fa fa-fw fa-home"
                                   style={{ fontSize: '1.75em' }}/>
                            </NavIcon>
                            <NavText>
                                Home
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts">
                            <NavIcon>
                                <i className="fa fa-fw fa-line-chart"
                                   style={{ fontSize: '1.75em' }}/>
                            </NavIcon>
                            <NavText>
                                Charts
                            </NavText>
                            <NavItem eventKey="charts/linechart">
                                <NavText>
                                    Line Chart
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="charts/barchart">
                                <NavText>
                                    Bar Chart
                                </NavText>
                            </NavItem>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
            </div>

        );
    }
}



