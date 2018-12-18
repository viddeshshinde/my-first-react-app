/**
 * Created by viddesh on 14/12/18.
 */

import React from 'react';
import { Logo } from './Logo';
import { headerStyle } from './HeaderCSS';
import { MenuBar } from './MenuBar';

export class Header extends React.Component {

    render() {
        return (

            <div style={headerStyle}>

                <Logo />
                <MenuBar />

            </div>
        );
    }

}