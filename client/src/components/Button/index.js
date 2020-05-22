import React from 'react';

const Button = props => {
    return(
        <button style={props.style} className={props.class} onClick={props.function}>{props.text}</button>
    );
}

export default Button;