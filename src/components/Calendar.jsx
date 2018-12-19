import React from 'react';
import Calendar from 'react-calendar';
import Alert from 'react-bootstrap/lib/Alert';

let divStyle = {
    display: 'flex',
    justifyContent:'center'
}

export class ReactCalendar extends React.Component {


    constructor() {
        super();

        this.state = {
            selDate: new Date()
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(dt) {
        this.setState({selDate: dt})
    }

    render() {
        return (
            <div>

                <Alert variant="primary">
                    <h5>
                        Selected date: { JSON.stringify(this.state.selDate) }
                    </h5>
                </Alert>

                <div style={divStyle}>
                    <Calendar onChange={this.onChange}
                              value={this.state.selDate}
                    />
                </div>

            </div>
        );
    }

}