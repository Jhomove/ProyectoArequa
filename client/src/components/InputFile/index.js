import React, { useState } from 'react';

const style = {
    container:{
        width: '95%',
        border: '1px solid #C4C4C4',
        borderRadius: 5,
        height: 50,
        fontSize: 14,
        margin: 'auto',
        marginTop: 20,
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        position: 'relative'
    },
    inputFile: {
        display: 'none'
    },
    textoRuta: {
        flex: 1
    },
    containerText: {
        flex: 3
    },
    containerButton: {
        flex: 1,
        borderLeft: '1px solid #C4C4C4',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-around'
    },
    textInput: {
        color: '#BDBDBD',
        margin: 15
    },
}

const InputFile = props => {
    return (
        <div>
            <input name={props.name} style={style.inputFile} type="file" id={props.id} onChange={props.onChange} className={props.class}/>
            <label style={style.container} htmlFor={props.id}>
                <div style={style.containerText}>
                    <p style={style.textInput} id="texto-ruta">{props.value === null || props.value === '' ? 'No se ha seleccionado un archivo.' : props.value}</p>
                </div>
                <div style={style.containerButton}>
                    <p style={{margin:'auto'}}>Seleccionar archivo</p>
                    <img src={props.icon} alt={props.alt} style={{margin:'auto'}} width="35" height="35"/>
                </div>
            </label>
        </div>
    );
}

export default InputFile;