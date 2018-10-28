import React from 'react';

export default class TriggerForm extends React.Component {
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