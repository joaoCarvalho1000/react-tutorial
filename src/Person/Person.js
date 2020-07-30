import React from 'react';

//lowercase the component name
const person =  (props) => {
    return (
            <div>
                <p>I'm {props.name} and I am {props.age} years old!</p>
                <p>{props.children}</p>
                <input type="text" onChange={props.changed} />
            </div>
            )
};



export default person;