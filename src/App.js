import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Person/Person';

class App extends Component {
  state = {
    person: [
      {name: "Mike", age: "27"},
      {name: "Ashley", age: "54"},
      {name: "Mitch", age: "24"}
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
          <Person name={this.state.person[1].name} age={this.state.person[1].age}/>
          <Person name={this.state.person[2].name} age={this.state.person[2].age}>
            {/* add children props within the custom tags to add extra information that can't be passed as a prop */}
            {/* children props can be any object or primitive, ol/ul, functions, other custom tags etc */}
            My Hobbies: Swimming, Cooking
          </Person>
        </p>
      </div>
    );

    // the code above will ger compiled by 'React' library and use a method called .createElement and compiles the returned text above into the text below:
    // .createElement takes at least 3 args - element tag, js object with className, style etc, innerHTML/innerText
    // return React.createElement('div', {className: 'App}, React.createElement('h1', null, 'React App Title'))
    // => <div className="App">
       //  <h1>React App Title</h1>
       // </div>
  }
}

export default App;
