import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';


class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount(){
    this.setState(
      {
        projects: [
          { id: uuid.v4(),
            title: 'Business Website',
          category: 'Web development'},
          { id: uuid.v4(),
            title: 'Personal Website',
          category: 'Web Design'},
          { id: uuid.v4(),
            title: 'Big Data',
          category: 'Data Analytics'}
        ]
      })
    }

handleAddProject(project){
let projects = this.state.projects;
projects.push(project);
this.setState({projects: projects});
};

handleDeleteProject(id){
  let projects = this.state.projects;
  let index = projects.findIndex(x => x.id === id);
  projects.splice(index,1);
  this.setState({projects: projects});

}


    render() {
      return (
        <div className="App">
        <AddProject addProject = {this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
        </div>
      );
    }
  }

  export default App;
