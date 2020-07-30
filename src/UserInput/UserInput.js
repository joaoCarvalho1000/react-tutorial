import React from 'react';

const userInput = (props) => {

    return(
        <div>
            <input onChange={props.onchangehandler} value={props.firstName} ></input>
        </div>
    )

};

export default userInput;