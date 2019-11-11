import React from "react";
import Todo from "../components/Todo";

const URL = "http://localhost:3000";

const TODOS_PATH = URL + "/todos";

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

  const handleForm = e => {
    e.preventDefault();
    const mainBody = {
      title: e.target.title.value,
      content: e.target.content.value,
      projectId: props.currentProject.id
    };
    const content = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(mainBody)
    };
    fetch(TODOS_PATH, content)
      .then(res => res.json())
      .then(props.addTodo);
    e.target.title.value = "";
    e.target.content.value = "";
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <input name="title" placeholder="title" />
        <input name="content" placeholder="content" />
        <input value="add todo" type="submit" />
      </form>
      {renderTodos()}
    </div>
  );
};

export default TodoContainer;
