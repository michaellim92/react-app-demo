// creating a custom component called Person
// custom componenets typically needs to be capitalised to differentiate custom and default components
// the name should describe what the component is about

// the most basic explanation for a component is:
// a component is a function tha returns from JSX

import React from 'react';
// don't need to import component because we are only creating a function and not extending from Component

const person = (props) => {
    return(
      <div className="person-card">
        <p>My name is {props.name}, and I am {props.age} years old</p>
        <p>{props.children}</p>
      </div>
    )
}

export default person;


