import React from 'react';
import Image from 'react-bootstrap/lib/Image';
import CompanyLogo from '../images/Logo.jpg';

export class Logo extends React.Component {

    render() {
        return (
            <div>
                <Image style={{width:"10%", height:"10%"}}
                       align="middle"
                       src={ CompanyLogo }
                       thumbnail/>
                <h2>Company name</h2>

            </div>
        );
    }

}