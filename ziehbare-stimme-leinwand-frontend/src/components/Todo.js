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
    const h5StyleDark = { color: "white" };
    const h5StyleLight = { color: "black" };

    const el = document.createElement("span");
    el.innerHTML = this.state.content;

    return (
      <div className="todo-item">
        {this.state.editable ? (
          <form
            className="edit-todo-form"
            name="form"
            onChange={this.handleChange}
          >
            <input onChange={() => {}} name="title" value={this.state.title} />
            <textarea
              rows="4"
              cols="50"
              onChange={() => {}}
              name="content"
              value={this.state.content}
            />
          </form>
        ) : (
          <div className="todo-content">
            <h5 style={this.props.darkMode ? h5StyleDark : h5StyleLight}>
              {this.props.title}
            </h5>

            <p
              style={this.props.darkMode ? h5StyleDark : h5StyleLight}
              dangerouslySetInnerHTML={{ __html: el.innerHTML }}
            ></p>
          </div>
        )}

        <div className="todo-action">
          <button className="delete-button" onClick={this.handleDelete}>
            x
          </button>
          <button className="edit-button" onClick={this.handleEdit}>
            edit
          </button>
        </div>
      </div>
    );
  }
}

export default Todo;
