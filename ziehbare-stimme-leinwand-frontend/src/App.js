import React from "react";
import "./App.css";
import { voiceRecognize } from "./utils/voiceRecognize.js";
import ProjectContainer from "./containers/ProjectContainer";
import TodoContainer from "./containers/TodoContainer";

const URL = "http://localhost:3000";

const TODOS_PATH = URL + "/todos";
const TODO_PATH = id => TODOS_PATH + "/" + id;

class App extends React.Component {
  state = {
    text: "say digits",
    projects: [],
    currentProject: {}
  };

  // voiceRecognize = voiceRecognize.bind(this);
  // componentDidMount() {
  //   this.voiceRecognize();
  // }

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
    if (this.state.todos && this.state.length.todos) {
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
   
        <div id="platform">
          {/* <h1>{this.state.text}</h1> */}
          <ProjectContainer
            projects={projects}
            currentProject={currentProject}
            setCurrentProject={this.setCurrentProject}
            setProjects={this.setProjects}
            addProject={this.addProject}
          />
          <TodoContainer
            currentProject={currentProject}
            setTodos={this.setTodos}
            deleteTodoById={this.deleteTodoById}
            addTodo={this.addTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
