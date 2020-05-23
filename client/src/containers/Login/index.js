import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

//Components
import Modal from '../../components/Modal';

//Context
import { GlobalContext } from './store';

//Css
import './index.css';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = props => {
    const { globalState, globalDispatch } = useContext(GlobalContext);

    const handleLogin = event => {
        //cambiar a sintaxis de react y hacer validaciones
        const   username = document.getElementsByClassName('user')[0].value,
                pass     = document.getElementsByClassName('pass')[0].value

        fetch("http://localhost:3100/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email    : username,
                password : pass
            })
        })
        .then(res => res.json())
        .then((result) => {
            console.log(result)
            globalDispatch({type: 'OPEN-LOGIN', logged: true})
            if(result.success) {
            }
        },
        (error) => {
            console.log('Error', error)
        })
    }

    const handleClose = event => {
        globalDispatch({type: 'OPEN-LOGIN', openLogin: false})
    }

    const handleOpen = event => {
        globalDispatch({type: 'OPEN-LOGIN', openLogin: true})
    }

    console.log('<<<', globalState)
    return globalState.openLogin ? (
        <Modal>
            <div className="card-login">
                <section className="card-login-header">
                    <div className="card-login-header-title">
                        <h2>Iniciar sesión</h2>
                    </div>
                    <div className="card-login-header-close">
                        <button className="btn-none" onClick={handleClose}>
                            X
                        </button>
                    </div>
                </section>
                <section className="card-login-container">
                    <div className="redes-sociales">

                    </div>
                    <div className="form">
                        <Input class="input-form user" text="Usuario"/>
                        <Input class="input-form pass" text="Contraseña"/>
                    </div>
                </section>
                <section className="card-login-footer">
                    <Button class="btn-login-2" icon="" text="Iniciar sesión" function={handleLogin}/>
                    <Link className="link" to="/">
                        Recuperar contraseña
                    </Link>
                    <p className="link" onClick={handleOpen}>
                        ¿Aún no tienes cuenta? Registrate aquí
                    </p>
                </section>
            </div>
        </Modal>
    ) : null;
}

export default Login;