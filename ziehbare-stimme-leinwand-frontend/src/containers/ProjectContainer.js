import React, { Component } from "react";
import Project from "../components/Project";

const URL = "http://localhost:3000";

const PROJECTS_PATH = URL + "/projects";
const PROJECT_PATH = id => PROJECTS_PATH + "/" + id;
export class ProjectContainer extends Component {
  //requires state of 'text'
  //voiceRecognize = voiceRecognize.bind(this);

  state = {
    active: false,
    addProjectForm: false
  };

  componentDidMount() {
    fetch(PROJECTS_PATH)
      .then(e => e.json())
      .then(projects => {
        this.props.setProjects(projects);
        this.props.setCurrentProject(projects[projects.length - 1]);
        // this.props.didLoad();
      });
    // this.voiceRecognize();
  }

  findProjectById = id => {
    return this.props.projects.find(x => x.id === id);
  };

  deleteProjectById = id => {
    if (this.props.projects.length > 1) {
      const foundProject = this.findProjectById(id);

      const content = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      };
      fetch(PROJECT_PATH(id), content).then(() => {
        const newList = [...this.props.projects].filter(project => {
          return project.id !== foundProject.id;
        });

        this.props.setProjects(newList);
        this.props.setCurrentProject(newList[0]);
      });
    }
  };

  isSelectedProject = project => {
    return project.id === this.props.currentProject.id;
  };

  handleForm = e => {
    e.preventDefault();
    const mainBody = {
      title: e.target.title.value
    };
    const content = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(mainBody)
    };
    fetch(PROJECTS_PATH, content)
      .then(res => res.json())
      .then(this.props.addProject);
    e.target.title.value = "";
  };

  renderProjects() {
    return this.props.projects.map(project => (
      <Project
        darkMode={this.props.darkMode}
        key={project.id}
        {...project}
        isSelected={this.isSelectedProject(project)}
        switchCurrentProject={() => this.props.setCurrentProject(project)}
        deleteProject={() => this.deleteProjectById(project.id)}
      />
    ));
  }

  displayForm = () => {
    this.setState({
      addProjectForm: !this.state.addProjectForm
    });
  };

  showForm = () => {
    return (
      <form onSubmit={this.handleForm}>
        <input id="addProject" name="title" placeholder="add project" />
      </form>
    );
  };

  addProjectTab() {
    const h5StyleDark = { color: "white" };
    const h5StyleLight = { color: "black" };
    return (
      <li
        style={this.props.darkMode ? h5StyleDark : h5StyleLight}
        className="add-tab"
        onMouseEnter={this.displayForm}
        onMouseLeave={this.displayForm}
      >
        {" "}
        {this.state.addProjectForm ? this.showForm() : <h1>+</h1>}{" "}
      </li>
    );
  }

  render() {
    return (
      <div className="tabbed skin-black-glass round">
        <ul>
          {this.addProjectTab()}
          {this.renderProjects()}
        </ul>
      </div>
    );
  }
}

export default ProjectContainer;
