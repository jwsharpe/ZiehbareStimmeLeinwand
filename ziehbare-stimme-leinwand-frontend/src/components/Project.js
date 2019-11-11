import React, { Component } from "react";
import Todo from "./Todo";
import TodoContainer from "../containers/TodoContainer";

export class Project extends Component {
  handleclick = () => {
    if (!this.props.isSelected()) {
      this.props.switchCurrentProject();
    }
  };
  handleDelete = () => {
    this.props.deleteProject();
  };

  render() {
    return (
      <div onClick={this.handleclick}>
        <p>{this.props.title}</p>
        <button onClick={this.handleDelete}>delete</button>
      </div>
    );
  }
}

export default Project;
