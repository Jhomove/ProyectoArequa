import React from 'react';

const SectionWithoutIcon = props => {
    return (
        <div className={props.class}>
            <ul>
                {
                    props.list.map((ele,key) => <li key={key}>{ele.text}</li>)
                }
            </ul>
        </div>
    );
}

export default SectionWithoutIcon;