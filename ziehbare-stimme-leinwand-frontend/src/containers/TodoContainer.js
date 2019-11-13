import React from "react";
import Todo from "../components/Todo";

const URL = "http://localhost:3000";

const TODOS_PATH = URL + "/todos";
const TODO_PATH = id => TODOS_PATH + "/" + id;

const TodoContainer = props => {
  const updateTodo = todo => {
    const index = props.currentProject.todos.findIndex(e => e.id === todo.id);
    props.currentProject.todos[index] = todo;
    props.setTodos(props.currentProject.todos);

    const mainBody = {
      title: todo.title,
      content: todo.content
    };
    const content = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(mainBody)
    };
    fetch(TODO_PATH(todo.id), content);
  };

  const renderTodos = () => {
    if (props.currentProject.todos)
      return props.currentProject.todos.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          darkMode={props.darkMode}
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
    <div className="todo-big-container">
      <div className="todo-form">
        <form  onSubmit={handleForm}>
          <input id="title" name="title" placeholder="title" />
          <input id="content" name="content" placeholder="content" />
          <input id="submit" name="submit" value="add todo" type="submit" />
        </form>
        <div id="dark-mode">
            <label className="switch">
                <input onClick={props.handleDarkMode} type="checkbox" />
                <div>
                    <span></span>
                </div>
            </label>
        </div>
      </div>
      <div className="todo-container">
      {renderTodos()}
      </div>
    </div>
  );
};

export default TodoContainer;
