import React from 'react';

export class Trigger extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.trigger.id,
            name: this.props.trigger.name,
            colour: this.props.trigger.colour,
            effect: this.props.trigger.effect
        }
    }

    removeTrigger(){

        fetch('http://localhost:7077/removeTrigger', {
            mode: 'cors',
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(res=>res.json())
            .then(res => console.log(res));
    }

    activateTrigger() {
        this.setState(() => {
            return {
                active: "true"
            };
        });
    }

    render() {
        return (
            <div id="trigContainer">
                <td>Name: {this.props.trigger.name} </td>
                <td>Colour: {this.props.trigger.colour}  </td>
                <td>Effect: {this.props.trigger.effect.toLocaleLowerCase()}  </td>
                <button onClick={(e) => this.removeTrigger()}>Remove Trigger</button>
            </div>
        );
    }
}
