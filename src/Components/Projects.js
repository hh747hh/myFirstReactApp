import React, { Component } from 'react';
import ProjectItem from './ProjectItem'

class Projects extends Component {
deletProject(id){
  this.props.onDelete(id);
}

  render() {
    //console.log(this.props);
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        //console.log(projects);
        return (
          <ProjectItem onDelete={this.deletProject.bind(this)} key={project.title} project={project} />
        );
      });
    }
    return (
      <div className="Projects">
      <h3>Latest Projects</h3>
        {projectItems}
      </div>
    );
  }
}

export default Projects;
