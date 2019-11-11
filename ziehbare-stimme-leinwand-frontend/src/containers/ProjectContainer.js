import React, { Component } from "react";
import Project from "../components/Project";

const URL = "http://localhost:3000";

const PROJECTS_PATH = URL + "/projects";
const PROJECT_PATH = id => PROJECTS_PATH + "/" + id;

export class ProjectContainer extends Component {
  //requires state of 'text'
  //voiceRecognize = voiceRecognize.bind(this);

  componentDidMount() {
    fetch(PROJECTS_PATH)
      .then(e => e.json())
      .then(projects => {
        this.props.setProjects(projects);
        this.props.setCurrentProject(projects[0]);
      });
    // this.voiceRecognize();
  }

  isSelectedProject = project => {
    return project.id === this.props.currentProject.id;
  };

  renderProjects() {
    return this.props.projects.map(project => (
      <Project
        key={project.id}
        {...project}
        isSelected={() => this.isSelectedProject(project)}
        switchCurrentProject={() => this.props.setCurrentProject(project)}
      />
    ));
  }
  render() {
    return <div className="project-container">{this.renderProjects()}</div>;
  }
}

export default ProjectContainer;
