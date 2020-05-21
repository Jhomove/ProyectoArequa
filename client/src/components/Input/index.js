//Dependencies
import React from 'react';

const Input = props => {
    return (
        <input className={props.class} placeholder={props.text}/>
    );
}

export default Input;