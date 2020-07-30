import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    username: 'supermax'
  };

 stateHandlerUsername = (event) => {
    this.setState({username: event.target.value });
  };
  
  render(){
    return (
      <div className="App">
        <UserInput onchangehandler={this.stateHandlerUsername} firstName={this.state.username}></UserInput>
        <UserOutput userName={this.state.username} ></UserOutput>
      </div>
    )
   
  }

}

export default App;
