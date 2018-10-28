import LightsClient from "./LightsClient";
import React from 'react';

export default class Lights extends React.Component {
    render() {
        return (
            <div id="lightsContainer">
                <h1>Lights</h1>
                <LightsClient/>
            </div>
        );
    }
}
