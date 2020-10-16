import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Person/Person';

// functional component used with React Hooks
const app = props => {

  // useState is React hook that lets you manage state in a functional component
  // useState will always return only 2 elements, first element is always currentState (beforeState and updatedState), second is a function that allow us to update the State
  const [ personsState, setPersonsState ] = useState({  
    person: [
      {name: "Mike", age: "27"},
      {name: "Ashley", age: "54"},
      {name: "Mitch", age: "24"}
    ]
  });  

  const [ otherState, setOtherState ] = useState('Some other state');

  console.log(personsState, otherState)

  // must include the word Handler if method isn't actively called but assigning as an event handler
  const switchNameHandler = () => {
    // setState allows you to change the objects inside 'state'
    // still gets passed at the updated initialState

    // the handler replaces the entire obj with the newState, so other objs in the State must be added from the old State to new State to be included
    setPersonsState({
      person: [
        {name: "Jimmy", age: "46"},
        {name: "Barbara", age: "24"},
        {name: "Donovan", age: "22"}
      ],
      // otherState: personsState.otherState, will carry otherState from oldState to newState
      // to prevent having to manually add the other objs, use useState multiple times
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <button onClick={switchNameHandler}>Switch Name</button>
          <Person 
            name={personsState.person[0].name}
            age={personsState.person[0].age}/>
          <Person 
            name={personsState.person[1].name}
            age={personsState.person[1].age}
            click={personsState.switchNameHandler} />
          <Person 

            name={personsState.person[2].name}
            age={personsState.person[2].age}>
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

export default app;

// state is something that extends from components that let you add state to the class component
  // class App extends Component {
    // state = {
    //   person: [
    //     {name: "Mike", age: "27"},
    //     {name: "Ashley", age: "54"},
    //     {name: "Mitch", age: "24"}
    //   ],
    //   otherState: "Something else in state",
    // }
  // }

  // using hooks
  // const app = props => {

    // useState is React hook that lets you manage state in a functional component
    // useState will always return only 2 elements, first element is always currentState (beforeState and updatedState), second is a function that alloww us to update the State
  //   const [ personsState, setPersonsState ] = useState({  
  //     person: [
  //       {name: "Mike", age: "27"},
  //       {name: "Ashley", age: "54"},
  //       {name: "Mitch", age: "24"}
  //     ]
  //   });  
  
  //   const [ otherState, setOtherState ] = useState({otherState: 'Some other state'})
  
  //   console.log(personsState, otherState)
  
    // must include the word Handler if method isn't actively called but assigning as an event handler
  //   const switchNameHandler = () => {
      // setState allows you to change the objects inside 'state'
      // still gets passed at the updated initialState
  
      // the handler replaces the entire obj with the newState, so other objs in the State must be added from the old State to new State to be included
  //     setPersonsState({
  //       person: [
  //         {name: "Jimmy", age: "46"},
  //         {name: "Barbara", age: "24"},
  //         {name: "Donovan", age: "22"}
  //       ],
        // otherState: personsState.otherState, will carry otherState from oldState to newState
        // to prevent having to manually add the other objs, use useState multiple times
  //     })
  //   }
  
  //     return (
  //       <div className="App">
  //         <header className="App-header">
  //           <img src={logo} className="App-logo" alt="logo" />
  //           <h1 className="App-title">Welcome to React</h1>
  //         </header>
  //         <p className="App-intro">
  //           <button onClick={switchNameHandler}>Switch Name</button>
  //           <Person 
  //             name={personsState.person[0].name}
  //             age={personsState.person[0].age}/>
  //           <Person 
  //             name={personsState.person[1].name}
  //             age={personsState.person[1].age}
  //             click/>
  //           <Person 
  //             name={personsState.person[2].name}
  //             age={personsState.person[2].age}>
  //             {/* add children props within the custom tags to add extra information that can't be passed as a prop */}
  //             {/* children props can be any object or primitive, ol/ul, functions, other custom tags etc */}
  //             My Hobbies: Swimming, Cooking
  //           </Person>
  //         </p>
  //       </div>
  //     );
