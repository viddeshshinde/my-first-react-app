import React from 'react';
import { Button , Jumbotron } from 'react-bootstrap';

export class Home extends React.Component {
    render() {

        /*<ButtonToolbar>
            <Button variant="primary" size="lg">
                Large button
            </Button>
            <Button variant="secondary" size="lg">
                Large button
            </Button>
        </ButtonToolbar>*/
        return (
            <div style={{backgrooundColor:"white", margin: 5}}>
                <br />
                <Jumbotron>
                    <h1>Hello, there!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style
                        component for calling
                        extra attention to featured content or information.
                    </p>
                    <p>
                        <Button href="http://www.google.com/search?q=learn+reactjs" variant="primary">Learn more about ReactJS</Button>
                    </p>
                </Jumbotron>
            </div>
        );

    }
}