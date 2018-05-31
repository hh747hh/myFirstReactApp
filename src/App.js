import React, { Component } from 'react';
import Projects from './Components/Projects';

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
          category: 'Data analytics'}
        ]
      })
    }

    render() {
      return (
        <div className="App">
        <p>this is the app div</p>
        <Projects projects={this.state.projects}/>
        </div>
      );
    }
  }

  export default App;
