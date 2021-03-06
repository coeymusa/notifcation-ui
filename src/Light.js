import React from 'react';

export default class Light extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            id: this.props.light.id,
            on: this.props.light.on,
            name: this.props.light.name,
            xy: this.props.light.xy
        }
    }

   handleClick(){
        if(this.state.on === "true"){
            this.setState(() => {
                return {
                    on: "false"
                };
            });
        } else {
            this.setState(() => {
                return {
                    on: "true"
                };
            });
        }

    fetch('http://localhost:7077/lights', {
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


    render() {
        return (
              <div>

                    <button onClick={(e) => this.handleClick()}>
                        Turn On/Off
                    </button>
                <td>Name: {this.state.name} </td>
                <td>Colour: {this.state.xy[0]}{this.state.xy[1]}  </td>
                <td>On: {this.state.on}</td>
                <td>Reachable</td>
            </div>
        )
    }
}
//      <img src="./image.jpg"/>