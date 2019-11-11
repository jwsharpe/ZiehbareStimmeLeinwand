import React from "react";
import Todo from "../components/Todo";

const TodoContainer = props => {
  const renderTodos = () => {
    if (props.todos)
      return props.todos.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          deleteTodo={() => props.deleteTodoById(todo.id)}
        />
      ));
  };

  return <div>{renderTodos()}</div>;
};

export default TodoContainer;
