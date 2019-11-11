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
      <ul className="active" onClick={this.handleclick}>
        <li id="text" >{this.props.title} <span class="deleteTab" onClick={this.handleDelete}> X </span> </li>
      </ul>
    );
  }
}

export default Project;
