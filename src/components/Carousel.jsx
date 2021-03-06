import React from 'react';
import logo from '../logo.svg';
import '../App.css';

import { Carousel, Table } from 'react-bootstrap';

const tableCSS = {
    "backgroundColor":"white",
    "minHeight": "58.1vh",
    "maxHeight": "58.1vh"
}

export class HomeCarousel extends React.Component {
    render() {

        return (
            <div style={{backgroundColor: "#282c34"}}>

                <Carousel
                    style={{minHeight: "90vh", maxHeight: "90vh"}}>
                    <Carousel.Item>
                        <h1 style={{color:"white"}}>Slide 1</h1>
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo"/>
                        </header>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis
                                interdum.</p>
                        </Carousel.Caption>
                        <br />
                    </Carousel.Item>
                    <Carousel.Item >
                        <h1 style={{color:"white"}}>Table</h1>

                        <Table style={tableCSS} striped bordered hover responsive="sm">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Jac</td>
                                <td>Thon</td>
                                <td>@slim</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Jac</td>
                                <td>Thon</td>
                                <td>@slim</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Jac</td>
                                <td>Thon</td>
                                <td>@slim</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Jac</td>
                                <td>Thon</td>
                                <td>@slim</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Jac</td>
                                <td>Thon</td>
                                <td>@slim</td>
                            </tr>
                            </tbody>
                        </Table>
                        <br />
                    </Carousel.Item>
                </Carousel>


            </div>
        );

    }
}
