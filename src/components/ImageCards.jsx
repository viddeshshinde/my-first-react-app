import React from 'react';
import Card from 'react-bootstrap/lib/Card';
import CardGroup from 'react-bootstrap/lib/CardGroup';
import blackiPhone from '../images/BlackiPhones.png';
import whiteiPhone from '../images/WhiteiPhone.png';
import ScrollAnimation from 'react-animate-on-scroll';

export class ImageCards extends React.Component {
    render() {
        return (
            <div>
                <ScrollAnimation
                    animateOnce='true'
                    animateIn='slideInUp'>

                    <br />


                    <div
                        style={{"borderStyle": "solid", "borderWidth": "2px"}}>


                        <CardGroup>
                            <Card style={{margin: 40}}>
                                <Card.Body>
                                    <Card.Title>
                                        <font size="84">Multi Color</font>
                                    </Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting
                                        text
                                        below
                                        as a natural lead-in to
                                        additional content. This content is a
                                        little
                                        bit longer.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Img variant="top" src={blackiPhone}/>
                                <Card.Footer>
                                    <small className="text-muted">Last updated
                                        3
                                        mins
                                        ago
                                    </small>
                                </Card.Footer>
                            </Card>
                            <Card style={{margin: 40}}>

                                <Card.Body>
                                    <Card.Title>
                                        <font size="84">White Color</font>
                                    </Card.Title>
                                    <Card.Text>
                                        This card has supporting text below as
                                        a
                                        natural lead-in to additional
                                        content.{' '}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Img variant="top" src={whiteiPhone}/>
                                <Card.Footer>
                                    <small className="text-muted">Last updated
                                        3
                                        mins
                                        ago
                                    </small>
                                </Card.Footer>
                            </Card>

                        </CardGroup>


                    </div>
                    <br />
                </ScrollAnimation>

            </div>
        );
    }
}
