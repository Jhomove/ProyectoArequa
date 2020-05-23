//Dependencies
import React, { useState, useContext, useEffect } from 'react';

//Components
import Input from '../Input';
import Button from '../Button';

//Images
import Arequa from '../../img/arequa.png';
import Login from '../../containers/Login';

//Context
import { GlobalContext } from '../../containers/Login/store';

//Styles

const Styles = {
    circlePerfil: {
        width: 40,
        height: 40,
        background: '#C4C4C4',
        borderRadius: '50%',
        margin: 5
    }
}

const MenuSuperior = props => {
    const { globalState, globalDispatch } = useContext(GlobalContext);

    const handleOpenModal = type => event => {
        switch (type) {
            case 'login':
                globalDispatch({type: 'OPEN-LOGIN', openLogin: true})
                break;
            case 'logup':
                globalDispatch({type: 'OPEN-LOGIN', openSignup: true})
                break;
            default:
                break;
        }
    }
    console.log(globalState)
    return (
        <div className="menu-superior" style={props.style}>
            <section className="section-icon">
                <img className="logo" src={Arequa} alt="logo"/>
            </section>
            <section className="section-search">
                <Input class="input-search" icon="" text="Buscar cursos"/>
            </section>
            {
                globalState.logged ?
                <div style={Styles.circlePerfil}></div>
                : 
                <section className="section-login-logup">
                    <Button class="btn-login action-buttons" icon="" text="Iniciar sesión" function={handleOpenModal('login')}/>
                    <Button class="btn-login action-buttons" icon="" text="Registrarse" function={handleOpenModal('logup')}/>
                </section>
            }
        )
        </div>
    );
}

export default MenuSuperior;