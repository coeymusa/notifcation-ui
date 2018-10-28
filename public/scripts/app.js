"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotifcationApp = function (_React$Component) {
    _inherits(NotifcationApp, _React$Component);

    function NotifcationApp() {
        _classCallCheck(this, NotifcationApp);

        return _possibleConstructorReturn(this, (NotifcationApp.__proto__ || Object.getPrototypeOf(NotifcationApp)).apply(this, arguments));
    }

    _createClass(NotifcationApp, [{
        key: "render",
        value: function render() {
            var title = "Notification Center";
            var trigger = {
                name: "TEST1",
                effect: "NONE",
                colour: "[0.25,0.50]",
                id: 1,
                active: "false"
            };
            var trigger2 = {
                name: "name",
                effect: "NONE",
                colour: "[0.25,0.50]",
                id: 2,
                active: "true"
            };

            var triggerArray = [trigger, trigger2];

            return React.createElement(
                "div",
                null,
                React.createElement(Feed, null),
                React.createElement(Lights, null),
                React.createElement(Triggers, { triggerArray: triggerArray })
            );
        }
    }]);

    return NotifcationApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    this.props.title
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var OptionsList = function (_React$Component3) {
    _inherits(OptionsList, _React$Component3);

    function OptionsList() {
        _classCallCheck(this, OptionsList);

        return _possibleConstructorReturn(this, (OptionsList.__proto__ || Object.getPrototypeOf(OptionsList)).apply(this, arguments));
    }

    _createClass(OptionsList, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "p",
                null,
                "OptionsList"
            );
        }
    }]);

    return OptionsList;
}(React.Component);

var Feed = function (_React$Component4) {
    _inherits(Feed, _React$Component4);

    function Feed() {
        _classCallCheck(this, Feed);

        return _possibleConstructorReturn(this, (Feed.__proto__ || Object.getPrototypeOf(Feed)).apply(this, arguments));
    }

    _createClass(Feed, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "feedSideBarContainer" },
                React.createElement(
                    "p",
                    null,
                    "Feed Bar Container"
                )
            );
        }
    }]);

    return Feed;
}(React.Component);

var Lights = function (_React$Component5) {
    _inherits(Lights, _React$Component5);

    function Lights() {
        _classCallCheck(this, Lights);

        return _possibleConstructorReturn(this, (Lights.__proto__ || Object.getPrototypeOf(Lights)).apply(this, arguments));
    }

    _createClass(Lights, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "lightsContainer" },
                React.createElement(
                    "h1",
                    null,
                    "Lights Container"
                ),
                React.createElement(LightsClient, null)
            );
        }
    }]);

    return Lights;
}(React.Component);

var Light = function (_React$Component6) {
    _inherits(Light, _React$Component6);

    function Light(props) {
        _classCallCheck(this, Light);

        return _possibleConstructorReturn(this, (Light.__proto__ || Object.getPrototypeOf(Light)).call(this, props));
    }

    _createClass(Light, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "td",
                    null,
                    "Name: ",
                    this.props.light.name,
                    " "
                ),
                React.createElement(
                    "td",
                    null,
                    "Colour: ",
                    this.props.light.xy[0],
                    this.props.light.xy[1],
                    "  "
                ),
                React.createElement(
                    "td",
                    null,
                    "On: ",
                    this.props.light.on
                ),
                React.createElement(
                    "td",
                    null,
                    "Reachable"
                )
            );
        }
    }]);

    return Light;
}(React.Component);

var Triggers = function (_React$Component7) {
    _inherits(Triggers, _React$Component7);

    function Triggers() {
        _classCallCheck(this, Triggers);

        return _possibleConstructorReturn(this, (Triggers.__proto__ || Object.getPrototypeOf(Triggers)).apply(this, arguments));
    }

    _createClass(Triggers, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Trigger Container"
                ),
                React.createElement(TriggerClient, null),
                React.createElement(
                    "h2",
                    null,
                    "Trigger Form"
                ),
                React.createElement(TriggerForm, null)
            );
        }
    }]);

    return Triggers;
}(React.Component);

var Trigger = function (_React$Component8) {
    _inherits(Trigger, _React$Component8);

    function Trigger(props) {
        _classCallCheck(this, Trigger);

        return _possibleConstructorReturn(this, (Trigger.__proto__ || Object.getPrototypeOf(Trigger)).call(this, props));
    }

    _createClass(Trigger, [{
        key: "toJson",
        value: function toJson() {
            console.log("\"id\": \"" + this.id + "\", \"name\": \"" + this.name + "\",\"colour\": \"" + this.colour + "\",\"effect\": \"" + this.effect + "\"");
        }
    }, {
        key: "inactivateTrigger",
        value: function inactivateTrigger() {
            this.setState(function () {
                return {
                    active: "false"
                };
            });
        }
    }, {
        key: "activateTrigger",
        value: function activateTrigger() {
            this.setState(function () {
                return {
                    active: "true"
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "trigContainer" },
                React.createElement(
                    "td",
                    null,
                    "Name: ",
                    this.props.trigger.name,
                    " "
                ),
                React.createElement(
                    "td",
                    null,
                    "Colour: ",
                    this.props.trigger.colour,
                    "  "
                ),
                React.createElement(
                    "td",
                    null,
                    "Effect: ",
                    this.props.trigger.effect.toLocaleLowerCase(),
                    "  "
                )
            );
        }
    }]);

    return Trigger;
}(React.Component);

var TriggerClient = function (_React$Component9) {
    _inherits(TriggerClient, _React$Component9);

    function TriggerClient() {
        _classCallCheck(this, TriggerClient);

        var _this9 = _possibleConstructorReturn(this, (TriggerClient.__proto__ || Object.getPrototypeOf(TriggerClient)).call(this));

        _this9.state = {
            data: []
        };
        return _this9;
    }

    _createClass(TriggerClient, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this10 = this;

            fetch('http://localhost:7077/triggers').then(function (response) {
                return response.json();
            }).then(function (data) {
                return _this10.setState({ data: data });
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "table",
                    null,
                    React.createElement(
                        "tbody",
                        null,
                        this.state.data.map(function (trigger, key) {
                            return React.createElement(
                                "tr",
                                { key: key },
                                React.createElement(Trigger, { key: trigger, trigger: trigger })
                            );
                        })
                    )
                )
            );
        }
    }]);

    return TriggerClient;
}(React.Component);

var LightsClient = function (_React$Component10) {
    _inherits(LightsClient, _React$Component10);

    function LightsClient() {
        _classCallCheck(this, LightsClient);

        var _this11 = _possibleConstructorReturn(this, (LightsClient.__proto__ || Object.getPrototypeOf(LightsClient)).call(this));

        _this11.state = {
            data: []
        };
        return _this11;
    }

    _createClass(LightsClient, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this12 = this;

            fetch('http://localhost:7077/lights').then(function (response) {
                return response.json();
            }).then(function (data) {
                return _this12.setState({ data: data });
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "table",
                    null,
                    React.createElement(
                        "tbody",
                        null,
                        this.state.data.map(function (light, key) {
                            return React.createElement(
                                "tr",
                                { key: key },
                                React.createElement(Light, { key: light, light: light })
                            );
                        })
                    )
                )
            );
        }
    }]);

    return LightsClient;
}(React.Component);

var TriggerForm = function (_React$Component11) {
    _inherits(TriggerForm, _React$Component11);

    function TriggerForm(props) {
        _classCallCheck(this, TriggerForm);

        var _this13 = _possibleConstructorReturn(this, (TriggerForm.__proto__ || Object.getPrototypeOf(TriggerForm)).call(this, props));

        _this13.clear = _this13.clear.bind(_this13);
        return _this13;
    }

    _createClass(TriggerForm, [{
        key: "onFormSubmit",
        value: function onFormSubmit(e) {
            e.preventDefault();
            var name = e.target.elements.nameOption.value;
            var effect = e.target.elements.effectOption.value;
            var colour = e.target.elements.colourOption.value;
            var newTrigger = new Trigger(null, name, colour, effect, null);
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
    }, {
        key: "clear",
        value: function clear() {
            alert('clearPlz');
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "triggerFormContainer" },
                React.createElement(
                    "form",
                    { onSubmit: this.onFormSubmit },
                    React.createElement("input", { type: "text", name: "nameOption" }),
                    React.createElement("br", null),
                    React.createElement("input", { type: "text", name: "effectOption" }),
                    React.createElement("br", null),
                    React.createElement("input", { type: "text", name: "colourOption" }),
                    React.createElement("br", null),
                    React.createElement(
                        "button",
                        null,
                        " Add Trigger"
                    )
                ),
                React.createElement(
                    "button",
                    { onClick: this.clear },
                    " Clear"
                )
            );
        }
    }]);

    return TriggerForm;
}(React.Component);

ReactDOM.render(React.createElement(NotifcationApp, null), document.getElementById("app"));
