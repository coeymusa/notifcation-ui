import React from 'react';

export class Trigger extends React.Component {
    constructor(props) {
        super(props)
    }

    toJson() {
        console.log(
            `"id": "${this.id}", "name": "${this.name}","colour": "${
                this.colour
                }","effect": "${this.effect}"`
        );
    }

    inactivateTrigger() {
        this.setState(() => {
            return {
                active: "false"
            };
        });
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
            </div>
        );
    }
}
