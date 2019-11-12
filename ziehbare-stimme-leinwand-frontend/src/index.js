import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Animation from "./components/Animation.js";



class Index extends React.Component {

    state={
        voiceCommand: ""
    }

    setVoiceCommand = (resultText) => {
    this.setState({voiceCommand: resultText})
    console.log(this.state.voiceCommand)
  }

    render() {
        return (
            <div id="root">
                <Animation voiceCommand={this.state.voiceCommand} />
                <App setVoiceCommand={this.setVoiceCommand} voiceCommand={this.state.voiceCommand} />
            </div>
        );
    }
}


ReactDOM.render(
  <Index />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
