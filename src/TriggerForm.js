import React from 'react';

export default class TriggerForm extends React.Component {
  constructor(props) {
      super(props);
      this.toJson = this.toJson.bind(this);
      this.clear = this.clear.bind(this);
      this.state = {}

  }

   toJson(newTrigger){
     return(
         `"id": "${this.newTrigger.id}", "name": "${this.newTrigger.name}","colour": "${this.newTrigger.colour}","effect": "${this.newTrigger.effect}"`
      )
  }
  onFormSubmit(e) {

      const name = e.target.elements.nameOption.value;
      const effect = e.target.elements.effectOption.value;
      const colour = e.target.elements.colourOption.value;
      const newTrigger = `{"name": "${name}","effect": "${effect}","colour": ${colour} }`;

      fetch('http://localhost:7077/addtrigger', {
          mode: 'cors',
          method: 'post',
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
          },
          body: newTrigger
      }).then(res => res.json())
          .then(res => console.log(newTrigger));

  }

  clear() {
      alert('clearPlz')
  }

  render() {
      return (
          <div id="triggerFormDiv">
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