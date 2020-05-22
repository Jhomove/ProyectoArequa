import React from 'react';

const style = {
    select: {
        width: '95%',
        border: '1px solid #C4C4C4',
        borderRadius: 5,
        background: '#fff',
        height: 50,
        fontSize: 14,
        margin: 'auto',
        marginTop: 20,
        marginBottom: 20
    }
}

const Select = props => {
    return (
        <select style={style.select}>
            {
                props.options.map((option,key) => <option value={option.value} key={key}>{option.text}</option>)
            }
        </select>
    );
}

export default Select;