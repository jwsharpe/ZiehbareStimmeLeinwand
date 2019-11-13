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
    const h5StyleDark = {color: 'white'}
    const h5StyleLight = {color: 'black'}

    return (
        <li style={this.props.darkMode ? h5StyleDark : h5StyleLight} onClick={this.handleclick} className={this.props.isSelected ? "active": null} id="text" >{this.props.title}   
  <span className="deleteTab" onClick={this.handleDelete}> X </span> </li>
    );
  }
}

export default Project;
