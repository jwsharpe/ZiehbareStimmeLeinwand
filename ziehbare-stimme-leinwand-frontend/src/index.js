import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Animation from "./components/Animation.js";



class Index extends React.Component {

    state={
        voiceCommand: "",
        darkMode: false
    }

    setVoiceCommand = (resultText) => {
    this.setState({voiceCommand: resultText})
  }

  handleDarkMode = () => {
    this.setState({
        darkMode: !this.state.darkMode
    })
    console.log(this.state.darkMode)
  }

    render() {


        return (
      
            <div  id="root">
                <div id="dark-mode">
                    <label className="switch">
                        <input onClick={this.handleDarkMode} type="checkbox" />
                        <div>
                            <span></span>
                        </div>
                    </label>
                </div>
                <Animation darkMode={this.state.darkMode} voiceCommand={this.state.voiceCommand} />
                <App darkMode={this.state.darkMode} setVoiceCommand={this.setVoiceCommand} voiceCommand={this.state.voiceCommand} />
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
