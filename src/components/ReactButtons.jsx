import React from 'react';
import { Button } from '@trendmicro/react-buttons';
import '@trendmicro/react-buttons/dist/react-buttons.css';

export default class MyReactButton extends React.Component {

    render() {

        return (
            <div>
                <br />
                <div style={{"border": "1px dashed #D3D3D3"}}>
                    <br />
                    <h3>React Buttons (@trendmicro/react-buttons)</h3>
                    <br />
                    <Button btnStyle="default">Default</Button>
                    <Button btnStyle="primary">Primary</Button>
                    <Button btnStyle="emphasis">Emphasis</Button>
                    <Button btnStyle="danger">Danger (Alias of
                        Emphasis)</Button>
                    <Button btnStyle="flat">Flat</Button>
                    <Button btnStyle="border">Border (Alias of Flat)</Button>
                    <Button btnStyle="link">Link</Button>
                    <br />
                    <br />

                    <Button btnSize="lg">Large</Button>
                    <Button btnSize="large">Large</Button>
                    <Button btnSize="md">Medium</Button>
                    <Button btnSize="medium">Medium</Button>
                    <Button btnSize="sm">Small</Button>
                    <Button btnSize="small">Small</Button>
                    <Button btnSize="xs">Extra Small</Button>
                    <Button btnSize="extra-small">Extra Small</Button>
                    <br />
                    <br />
                </div>
                <br />
            </div>
        );

    }

}
