import React from 'react';

export default class Light extends React.Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <div>
                <td>Name: {this.props.light.name} </td>
                <td>Colour: {this.props.light.xy[0]}{this.props.light.xy[1]}  </td>
                <td>On: {this.props.light.on}</td>
                <td>Reachable</td>
            </div>
        )
    }
}
