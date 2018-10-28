import React from 'react';
import Light from './Light';

export default class LightsClient extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentDidMount() {
      fetch('http://localhost:7077/lights')
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }
    
    render() {
        return (
            <div id  = "lightsDiv">
                <table>
                    <tbody>
                    {this.state.data.map(function (light, key) {
                        return (
                            <tr key = {key}>
                            <Light key= {light} light = {light}/>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}