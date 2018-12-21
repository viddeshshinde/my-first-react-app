import React from 'react';
import { Button , Jumbotron } from 'react-bootstrap';
import { MyVerticallyCenteredModal } from './Modal';
import { Spinner } from './Spinner';


export class LoadingButton extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            isLoading: false,
            modalShow: false,
            userData: "A demo Modal text"
        };
    }

    handleClick() {
        this.setState({ isLoading: true }, () => {

            fetch("https://reqres.in/api/users?page=1")
                .then(res => res.json())
                .then(
                    (result) => {
                        //alert(JSON.stringify(result));
                        this.setState({userData: JSON.stringify(result),
                            modalShow: true});
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                    }
                ).then((result) => {
                this.setState({
                    isLoading: false});
            });
            /*simulateNetworkRequest().then(() => {
                this.setState({ isLoading: false });
            });*/
        });
    }

    render() {

        let modalClose = () => this.setState({ modalShow: false });

        const { isLoading } = this.state;

        return (

        <Jumbotron>
            <br />
            <h1>Test API - Load Users</h1>
            <br />
            <p>
                The button will load the users data from URL: <br/>
                <b>https://reqres.in/api/users?page=1</b>
            </p>
            <br />
            <p>
                <Button
                    variant="primary"
                    disabled={isLoading}
                    onClick={!isLoading ? this.handleClick : null}
                >
                    {isLoading ? 'Loading…' : 'Click to load'}
                </Button>
                <br />
                <br />
                { this.state.isLoading && <Spinner />}
            </p>
            <p>
                <MyVerticallyCenteredModal
                    show={this.state.modalShow}
                    userData = {this.state.userData}
                    onHide={modalClose}
                />
            </p>
        </Jumbotron>


        );
    }
}




