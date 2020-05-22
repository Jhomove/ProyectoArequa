import React from 'react';

const About = props => {
    return(
        <div className={props.class}>
            {props.children}
        </div>
    );
}

export default About;