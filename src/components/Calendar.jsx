import React from 'react';
import Calendar from 'react-calendar';
import Alert from 'react-bootstrap/lib/Alert';
import Button from 'react-bootstrap/lib/Button';
import Dropdown from 'react-bootstrap/lib/Dropdown';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import moment from 'moment';


let divStyle = {
    display: 'flex',
    justifyContent: 'center',
    boxShadow: "5px 5px 20px 1px grey"
}


export class ReactCalendar extends React.Component {


    constructor() {
        super();

        this.state = {
            selDate: new Date(),
            calBtnText: 'Select a date',
            showCal: true
        }


        this.onDaySelect = this.onDaySelect.bind(this);
    }



    onDaySelect(dt) {
        this.setState({
            //showCal: false,
            selDate: dt,
            calBtnText: moment(dt).format('DD-MM-YYYY')
        });
    }


    render() {

        return (
            <div>
                <h5>
                    <Alert variant="primary">
                        Wish to die on :&nbsp;&nbsp;
                    </Alert>


                    <Dropdown as={ButtonGroup}>

                        <Button style={{width:"115px", textAlign:"center"}}
                                variant="success">
                            {this.state.calBtnText}
                        </Button>

                        <Dropdown.Toggle split
                                         variant="success"
                                         id="dropdown-split-basic"/>
                        {
                            this.state.showCal &&
                            <Dropdown.Menu
                                flip="true"
                                rootCloseEvent="mousedown">
                                <div id="calenderDiv"
                                     style={divStyle}>

                                    <Calendar
                                        onClickDay={this.onDaySelect}
                                        value={this.state.selDate}
                                    />
                                </div>
                            </Dropdown.Menu>
                        }

                    </Dropdown>
                </h5>

                <br />


            </div>
        );
    }

}