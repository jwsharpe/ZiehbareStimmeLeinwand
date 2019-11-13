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
    resultText: "",
    loaded: false,
    projects: [],
    currentProject: {},
    scale: 1.0,
    left: 0
  };

  didLoad = () => {
    this.setState({ loaded: true });
    anime({
      targets: ".App",
      rotate: 720.1,
      duration: 4000,

      keyframes: [{ scale: 1 }, { scale: 1.5 }, { scale: 2 }, { scale: 1 }]
    });
  };

  voiceRecognize = voiceRecognize.bind(this);
  componentDidMount() {
    this.voiceRecognize();
    setTimeout(
      () =>
        setInterval(() => {
          this.setState(
            prev => ({
              scale: prev.scale + (Math.random() * 0.05 - 0.025)
            }),
            () =>
              anime({
                targets: ".App",
                duration: 1000,
                scale: this.state.scale
              })
          );

          this.setState(
            prev => ({
              left: prev.left + parseInt(Math.random() * 10 - 5)
            }),
            () =>
              anime({
                targets: ".App",
                duration: 1000,
                translateX: this.state.left
              })
          );
        }, 2500),
      10000
    );
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
