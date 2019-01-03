/**
 * Created by viddesh on 17/12/18.
 */

import React from 'react';
import { Button, Modal, Table } from 'react-bootstrap';

const tableCSS = {
    "backgroundColor": "white",
    "minHeight": "58.1vh",
    "maxHeight": "60vh"
}

let tableData = [];
/*let tableHardCodedData = [
        {
            "id": 1,
            "first_name": "George",
            "last_name": "Bluth"
        },
        {
            "id": 2,
            "first_name": "Janet",
            "last_name": "Weaver"
        },
        {
            "id": 3,
            "first_name": "Emma",
            "last_name": "Wong"
        }
    ];*/

const thead = <tr>
    <th>#</th>
    <th>First Name</th>
    <th>Last Name</th>
</tr>;


export class MyVerticallyCenteredModal extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            loadedData: [],
            tab: [],
            numberOfUsers : 0
        }

        this.fillTable = this.fillTable.bind(this);
    }


    fillTable() {

        let table = [];

        //tableData = tableHardCodedData;
        tableData = this.props.userData.data;

        for (let i in tableData) {
            let children = []
            children.push(<td>{tableData[i].id}</td>);
            children.push(<td>{tableData[i].first_name}</td>);
            children.push(<td>{tableData[i].last_name}</td>);
            table.push(<tr>{children}</tr>);
            this.setState({numberOfUsers : children.length})
        }

        this.setState({
            tab: table
        })


    }


    componentWillReceiveProps() {
        this.fillTable();
    }


    render() {

        return (

            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        User data count: {this.state.numberOfUsers}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Table style={tableCSS} striped bordered hover
                           responsive="sm">
                        <thead>

                        {thead}

                        </thead>

                        <tbody>
                        {this.state.tab}
                        </tbody>
                    </Table>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>

            </Modal>
        );
    }
}