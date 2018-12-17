/**
 * Created by viddesh on 17/12/18.
 */

import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export class MyVerticallyCenteredModal extends React.Component {
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Users Data
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Found some JSON data: </h5>
                    <p style={{textAlign:"center", "wordWrap": "break-word"}}>
                        { this.props.userData }
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}