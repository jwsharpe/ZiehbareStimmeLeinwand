import React, { Component } from "react";
import Todo from "./Todo";
import TodoContainer from "../containers/TodoContainer";

export class Project extends Component {
  handleclick = () => {
    if (!this.props.isSelected()) {
      this.props.switchCurrentProject();
    }
  };

  render() {
    return (
      <div onClick={this.handleclick}>
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

export default Project;
