import React from "react";
import "./App.css";
import { voiceRecognize } from "./utils/voiceRecognize.js";
import ProjectContainer from "./containers/ProjectContainer";
import TodoContainer from "./containers/TodoContainer";
import anime from "animejs/lib/anime.es.js";

const URL = "http://localhost:3000";

const TODOS_PATH = URL + "/todos";
const TODO_PATH = id => TODOS_PATH + "/" + id;

class App extends React.Component {
  state = {
    text: "hi",
    loaded: false,
    projects: [],
    currentProject: {}
  };

  didLoad = () => {
    this.setState({ loaded: true });
    anime({
      targets: "div",
      rotate: 540,
      duration: 4000,

      keyframes: [
        { scale: 1 },
        { scale: 1.1, backgroundColor: "#000", translateX: "50vw" },
        { scale: 1 },
        { scale: 1.5, translateX: "-50vw" },
        { scale: 1 },
        { scale: 1.5, backgroundColor: "#000034" },
        { scale: 1, translateX: "-40vw" },
        { scale: 1.5, translateY: "150vh" },
        { scale: 1 },
        { scale: 1.5, backgroundColor: "#002c34" },
        { scale: 1, translateX: "40vw" },
        { scale: 1.5, backgroundColor: "#282c34", translateY: "-150vh" },
        { scale: 1 }
      ]
    });
  };

  voiceRecognize = voiceRecognize.bind(this);
  componentDidMount() {
    // this.voiceRecognize();
  }

  setTodos = todos => {
    this.state.currentProject.todos = todos;
    this.setCurrentProject(this.state.currentProject);
  };
  setProjects = projects => {
    this.setState({ projects: projects });
  };

  addProject = project => {
    this.setState(
      prev => ({
        projects: [...prev.projects, project]
      }),
      () => this.setCurrentProject(project)
    );
  };

  addTodo = todo => {
    if (
      this.state.currentProject.todos &&
      this.state.currentProject.todos.length
    ) {
      this.state.currentProject.todos = [
        ...this.state.currentProject.todos,
        todo
      ];
    } else {
      this.state.currentProject.todos = [todo];
    }
    this.setState({ currentProject: this.state.currentProject });
  };

  setCurrentProject = project => {
    this.setState({ currentProject: project });
  };

  findTodoById = id => {
    return this.state.currentProject.todos.find(x => x.id === id);
  };

  deleteTodoById = id => {
    const foundTodo = this.findTodoById(id);

    const content = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    };
    fetch(TODO_PATH(id), content).then(() => {
      const newList = [...this.state.currentProject.todos].filter(todo => {
        return todo.id !== foundTodo.id;
      });

      this.state.currentProject.todos = newList;

      this.setState({ currentProject: this.state.currentProject });
    });
  };

  render() {
    const { currentProject, projects } = this.state;

    return (
      <div className="App">
        {/* <h1>{this.state.text}</h1> */}
        {!this.state.loaded ? (
          <h1 onClick={this.didLoad}>say go</h1>
        ) : (
          <>
            <ProjectContainer
              projects={projects}
              currentProject={currentProject}
              setCurrentProject={this.setCurrentProject}
              setProjects={this.setProjects}
              addProject={this.addProject}
              didLoad={this.didLoad}
            />
            <TodoContainer
              currentProject={currentProject}
              setTodos={this.setTodos}
              deleteTodoById={this.deleteTodoById}
              addTodo={this.addTodo}
            />
          </>
        )}
      </div>
    );
  }
}

export default App;
