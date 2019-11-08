import React from "react";
import "./App.css";
import { voiceRecognize } from "./utils/voiceRecognize.js";

const URL = "http://localhost:3000";

const TODOS_PATH = URL + "/todos";
const TODO_PATH = id => TODOS_PATH + "/" + id;

const PROJECTS_PATH = URL + "/projects";
const PROJECT_PATH = id => PROJECTS_PATH + "/" + id;

class App extends React.Component {
  state = {
    text: "say digits",
    projects: []
  };

  //requires state of 'text'
  voiceRecognize = voiceRecognize.bind(this);

  componentDidMount() {
    fetch(PROJECTS_PATH)
      .then(e => e.json())
      .then(projects => this.setState({ projects: projects }));
    // this.voiceRecognize();
  }

  renderText = () => {
    if (this.state.text === "go") return <p style={{ color: "green" }}>go</p>;
    if (this.state.text === "stop") return <p style={{ color: "red" }}>stop</p>;
    return <p>{this.state.text}</p>;
  };

  render() {
    console.log(this.state.projects);
    return (
      <div className="App">
        {/* <TodoContainer todos={this.state.todos} /> */}
      </div>
    );
  }
}

export default App;
