import React from 'react';

const Section = props => {
    return (
        <div className={props.class.seciontCard}>
            <div className={props.class.icon}>
                <img src={props.icon} alt="imagen-descriptiva"/>
            </div>
            <div className={props.class.content}>
                <div className={props.class.title}>
                    <h2>
                        {props.title}
                    </h2>
                </div>
                <div className={props.class.text}>
                    <p>{props.paragraph}</p>
                </div>
            </div>
        </div>
    );
}

export default Section;