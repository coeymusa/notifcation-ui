class NotifcationApp extends React.Component {
    render() {
        const title = "Notification Center";
        const trigger = {
            name: "TEST1",
            effect: "NONE",
            colour: "[0.25,0.50]",
            id: 1,
            active: "false"
        };
        const trigger2 = {
            name: "name",
            effect: "NONE",
            colour: "[0.25,0.50]",
            id: 2,
            active: "true"
        };

        const triggerArray = [trigger, trigger2];

        return (
            <div>
                {/*<Header title={title}/>*/}
                {/*// <OptionsList/>*/}
                {<Feed/>}
                {<Lights/>}
              
             
                {<Triggers triggerArray={triggerArray}/>}
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

class OptionsList extends React.Component {
    render() {
        return <p>OptionsList</p>;
    }
}

class Feed extends React.Component {
    render() {
        return (
            <div id="feedSideBarContainer">
                <p>Feed Bar Container</p>
            </div>
        );
    }
}

class Lights extends React.Component {
    render() {
        return (
            <div id="lightsContainer">
                <h1>Lights Container</h1>
                <LightsClient/>
            
            </div>
        );
    }
}

class Light extends React.Component {
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

class Triggers extends React.Component {
    render() {
        return (
            <div>
            <h1>Trigger Container</h1>
            <TriggerClient />
            <h2>Trigger Form</h2>
             <TriggerForm/>
            </div>
        );
    }
}

class Trigger extends React.Component {
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

class TriggerClient extends React.Component{
    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentDidMount() {
      fetch('http://localhost:7077/triggers')
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }

    render(){
        return(
            <div>
            <table>
                <tbody>
                {this.state.data.map(function (trigger, key) {
                    return (
                        <tr key = {key}> 
                        <Trigger key={trigger} trigger={trigger}/>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
        )
    }
}

class LightsClient extends React.Component {
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
            <div>
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

class TriggerForm extends React.Component {
    constructor(props) {
        super(props);
        this.clear = this.clear.bind(this);
    }

    onFormSubmit(e) {
        e.preventDefault();
        const name = e.target.elements.nameOption.value;
        const effect = e.target.elements.effectOption.value;
        const colour = e.target.elements.colourOption.value;
        const newTrigger = new Trigger(null, name, colour, effect, null);
        if (name) {
            newTrigger.name = name.toString();
            e.target.elements.nameOption.value = "";
        }
        if (effect) {
            newTrigger.effect = effect.toString();
            e.target.elements.effectOption.value = "";
        }
        if (colour) {
            newTrigger.colour = colour.toString();
            e.target.elements.colourOption.value = "";
        }
        alert(newTrigger.toString());
    }

    clear() {
        alert('clearPlz')
    }

    render() {
        return (
            <div id="triggerFormContainer">
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="nameOption"/>
                    <br/>
                    <input type="text" name="effectOption"/>
                    <br/>
                    <input type="text" name="colourOption"/>
                    <br/>
                    <button> Add Trigger</button>
                </form>
                <button onClick={this.clear}> Clear</button>
            </div>
        );
    }
}


ReactDOM.render(<NotifcationApp/>, document.getElementById("app"));
        