//Dependencies
import React from 'react';

const Input = props => {
    return (
        <input name={props.name} style={props.style} className={props.class} placeholder={props.text} onChange={props.onChange} type={props.type} value={props.value === null || props.value === '' ? '' : props.value}/>
    );
}

export default Input;