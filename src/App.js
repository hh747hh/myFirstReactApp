import React, { Component } from 'react';
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
          {title: 'Business Website',
          category: 'Web development'},
          {title: 'Personal Website',
          category: 'Web Design'},
          {title: 'Big Data',
          category: 'Data Analytics'}
        ]
      })
    }

    render() {
      return (
        <div className="App">
        <AddProject />
        <Projects projects={this.state.projects}/>
        </div>
      );
    }
  }

  export default App;
