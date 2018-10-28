import TriggerClient from "./TriggerClient";
import React from 'react';
import TriggerForm from './TriggerForm';

export default class TriggersManager extends React.Component {
    render() {
        return (
            <div id = "triggerContainer">
            <h1>Triggers</h1>
            <TriggerClient />
            <h2>Trigger Form</h2>
             <TriggerForm/>
            </div>
        );
    }
}