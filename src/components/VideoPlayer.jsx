import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { Form, Button, Row, Col } from 'react-bootstrap';

/*url='https://vimeo.com/300361948' playing/>*/

export class VideoPlayer extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
        this.state = {
            url : "https://www.youtube.com/watch?v=EjHJWmQJaPk",
            inputValue : "https://www.youtube.com/watch?v=EjHJWmQJaPk"
        }

    }

    handleClick(e) {
        this.setState({
            url: this.state.inputValue
        });
    }

    updateInputValue(e) {
        this.setState({
            inputValue: e.target.value
        });
    }

    render() {
        return (
            <div>
                <div>
                    <Form>

                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Col sm="8">
                                <Form.Control
                                    name="urlText"
                                    type="url"
                                    value={this.state.inputValue}
                                    onChange={this.updateInputValue}
                                    placeholder="Enter your URL here"/>
                            </Col>
                            <Col sm="15">
                                <Button
                                    variant="primary"
                                    onClick={this.handleClick}>
                                    Submit
                                </Button>
                            </Col>
                        </Form.Group>

                    </Form>


                    <br />
                </div>
                <ReactPlayer
                    width="auto"
                    height="640px"
                    controls="true"
                    url={this.state.url} playing/>
            </div>
        );
    }
}
