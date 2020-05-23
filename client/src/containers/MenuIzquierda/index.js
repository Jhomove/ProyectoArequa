import React, { useContext } from 'react';
import { GlobalContext } from '../Login/store';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const Styles = {
    container: {
        height: window.innerHeight - 50 - 100,
        background: '#EE3556',
        width: 200,
        borderTop: '1px solid #fff',
        flex: 1
    },
    button: {
        height: 50,
        width: 200,
        color: '#fff',
        background: '#EE3556',
        border: 'none',
        fontSize: 14
    },
    buttonSelected: {
        height: 50,
        width: 200,
        color: '#fff',
        background: '#BF324B',
        border: 'none',
        fontSize: 14
    }
}

const MenuIzquierda = () => {
    const { login, dispatchLogin } = useContext(GlobalContext);
    // return login.length > 0 &&  login[0].login ? 
    return login.length === 0 ||  login[0].login ? 
    (
        <div style={Styles.container}>
            <Button style={{...Styles.buttonSelected,marginTop: 10}} class="" icon="" text="Crear contenido"/>
            <Button style={Styles.button} class="" icon="" text="Comunicación"/>
            <Button style={Styles.button} class="" icon="" text="Rendimiento"/>
        </div>
    ) : null;
}

export default MenuIzquierda;