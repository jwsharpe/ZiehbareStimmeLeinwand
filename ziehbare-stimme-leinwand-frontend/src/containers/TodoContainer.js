import React from "react";
import Todo from "../components/Todo";

const TodoContainer = props => {
  const updateTodo = todo => {
    const index = props.currentProject.todos.findIndex(e => e.id === todo.id);
    props.currentProject.todos[index] = todo;
    props.setTodos(props.currentProject.todos);
  };

  const renderTodos = () => {
    if (props.currentProject.todos)
      return props.currentProject.todos.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          deleteTodo={() => props.deleteTodoById(todo.id)}
          updateTodo={updateTodo}
        />
      ));
  };

  return <div>{renderTodos()}</div>;
};

export default TodoContainer;
