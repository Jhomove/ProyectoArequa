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
    const [ inputText, setInputText ] = useState('No se ha seleccionado un archivo.')

    const handleChangeInput = event => {
        const file = event.target.files[0].name
        setInputText(file)
    }
    return (
        <div>
            <input style={style.inputFile} type="file" id={props.id} onChange={handleChangeInput}/>
            <label style={style.container} htmlFor={props.id}>
                <div style={style.containerText}>
                    <p style={style.textInput} id="texto-ruta">{inputText}</p>
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