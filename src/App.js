import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    person: [
      { name: 'max', age: 28 },
      { name: 'mix', age: 12 }
    ],
    isShowStuff: false
  };


  toggleShowStuff = () => {

    this.setState({ isShowStuff: !this.state.isShowStuff })

  }

  render() {

    let showStuff = null;

    if (this.state.isShowStuff) {

      showStuff = (
        <div>
          <UserInput onchangehandler={this.stateHandlerUsername} firstName={this.state.username}></UserInput>
          <UserOutput userName={this.state.username} ></UserOutput>
        </div>
      );
      
    }

    return (

      <div className="App">

        <button onClick={this.toggleShowStuff}>show stuff</button>

        {showStuff}

        {this.state.person.map((person,index) => {
          return ( 
            <Person key={index} name={person.name} age={person.age}></Person>
          );
        })}

      </div>
    );
  }
}

export default App;
