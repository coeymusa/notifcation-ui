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
       this.setState(() => {
           return {
               on: "false"
           };
       });
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
                <td>Name: {this.props.light.name} </td>
                <td>Colour: {this.props.light.xy[0]}{this.props.light.xy[1]}  </td>
                <td>On: {this.props.light.on}</td>
                <td>Reachable</td>
            </div>
        )
    }
}
//      <img src="./image.jpg"/>