import {Trigger} from "./Trigger.js";
import React from 'react';

export default class TriggerClient extends React.Component{
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
          <div id= "triggersDiv">
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