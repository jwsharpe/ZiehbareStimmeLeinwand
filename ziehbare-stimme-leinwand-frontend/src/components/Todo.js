import React from "react";

const Todo = props => {
  const handleDelete = () => {
    props.deleteTodo();
  };
  const handleEdit = () => {};

  return (
    <div className="todo-item">
      <h5>{props.title}</h5>
      <h5>{props.content}</h5>
      <button onClick={handleEdit}>e</button>
      <button onClick={handleDelete}>x</button>
    </div>
  );
};

export default Todo;
