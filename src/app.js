import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Feed from './Feed';
import LightsManager from './LightsManager';
import TriggersManager from './TriggersManager';

class NotifcationApp extends React.Component {
    render() {
        const title = "Notification Center";

        return (
            <div>
                {<Header title={title}/>}
                {<Feed/>}
                {<LightsManager/>}
                {<TriggersManager/>}
            </div>
        );
    }
}


ReactDOM.render(<NotifcationApp/>, document.getElementById("app"));