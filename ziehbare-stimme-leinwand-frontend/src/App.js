import React from "react";
import "./App.css";
import Animation from './components/Animation.js'
import { voiceRecognize } from "./utils/voiceRecognize.js";

class App extends React.Component {
  state = {
    text: "say digits"
  };

  //requires state of 'text'
  voiceRecognize = voiceRecognize.bind(this);

  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
    this.voiceRecognize();
  }

  updateAnimationState = () => {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
}

  renderText = () => {
    if (this.state.text === "go") return <p style={{ color: "green" }}>go</p>;
    if (this.state.text === "stop") return <p style={{ color: "red" }}>stop</p>;
    return <p id="text" >{this.state.text}</p>;
  };
  render() {
    return (
    <div className="App">
        {this.renderText()}
        <Animation></Animation>
    </div>
    )
  }
}

export default App;
