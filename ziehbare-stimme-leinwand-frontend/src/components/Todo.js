import React, { Component } from "react";

export class Todo extends Component {
  state = {
    editable: false,
    title: this.props.title,
    content: this.props.content
  };

  handleDelete = () => {
    this.props.deleteTodo();
  };
  handleEdit = () => {
    this.setState(prev => ({ editable: !prev.editable }));
  };

  updateTodo = () => {
    const todo = {
      id: this.props.id,
      title: this.state.title,
      content: this.state.content
    };
    this.props.updateTodo(todo);
  };
  handleChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      this.updateTodo
    );
  };
  render() {
    return (
      <div className="todo-item">
        {this.state.editable ? (
          <form name="form" onChange={this.handleChange}>
            <input onChange={() => {}} name="title" value={this.state.title} />
            <input
              onChange={() => {}}
              name="content"
              value={this.state.content}
            />
          </form>
        ) : (
          <>
            <h5>{this.props.title}</h5>
            <h5>{this.props.content}</h5>
          </>
        )}

        <button onClick={this.handleEdit}>e</button>
        <button onClick={this.handleDelete}>x</button>
      </div>
    );
  }
}

export default Todo;
