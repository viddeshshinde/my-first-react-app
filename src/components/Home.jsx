import React from 'react';
import { Button , Jumbotron } from 'react-bootstrap';

export class Home extends React.Component {
    render() {

        return (
            <div style={{backGroundColor:"white"}}>
                <br />
                <br />
                <Jumbotron>
                    <h1 >Hello, there!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style
                        component for calling
                        extra attention to featured content or information.
                    </p>
                    <p>
                        <Button
                            href="http://www.google.com/search?q=learn+reactjs" variant="primary">Learn more about ReactJS</Button>
                    </p>
                </Jumbotron>
            </div>
        );

    }
}