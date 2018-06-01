import React, { Component } from 'react';


class ProjectItem extends Component {

deletProject(id){
this.props.onDelete(id);
}


  render() {
    //console.log(this.props);
    return (
      <li className="Project">
      <strong>{this.props.project.title}</strong>: {this.props.project.category}
      <a href="#" onClick={this.deletProject.bind(this, this.props.project.id)}>X</a>
      </li>
    );
  }
}

export default ProjectItem;
