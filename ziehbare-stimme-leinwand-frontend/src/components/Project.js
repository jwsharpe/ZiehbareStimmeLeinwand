import React, { Component } from "react";
import Todo from "./Todo";
import TodoContainer from "../containers/TodoContainer";

export class Project extends Component {
  handleclick = () => {
    if (!this.props.isSelected) {
      this.props.switchCurrentProject();
    }
  };
  handleDelete = () => {
    this.props.deleteProject();
  };


  render() {
    return (
        <li  onClick={this.handleclick} className={this.props.isSelected ? "active": null} id="text" >{this.props.title} 
  <span className="deleteTab" onClick={this.handleDelete}> X </span> </li>
    );
  }
}

export default Project;
