import React from "react";
import "./App.css";
import { voiceRecognize } from "./utils/voiceRecognize.js";

class App extends React.Component {
  state = {
    text: "say digits"
  };

  //requires state of 'text'
  voiceRecognize = voiceRecognize.bind(this);

  componentDidMount() {
    this.voiceRecognize();
  }

  renderText = () => {
    if (this.state.text === "go") return <p style={{ color: "green" }}>go</p>;
    if (this.state.text === "stop") return <p style={{ color: "red" }}>stop</p>;
    return <p>{this.state.text}</p>;
  };
  render() {
    return <div className="App">{this.renderText()}</div>;
  }
}

export default App;
