//Dependencies
import React from 'react';

const Input = props => {
    return (
        <input style={props.style} className={props.class} placeholder={props.text}/>
    );
}

export default Input;