import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

//Components
import Modal from '../../components/Modal';

//Context
import { ContextLogin } from './store';

//Css
import './index.css';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = props => {
    const { login, dispatchLogin } = useContext(ContextLogin);

    const handleLogin = event => {
        console.log("hola")
    }

    const handleClose = event => {
        const data = {
            login: false,
            openLogin: false,
            openSignup: false
        }
        dispatchLogin({type: 'OPEN-LOGIN', data: data})
    }

    const handleOpen = event => {
        const data = {
            login: false,
            openLogin: false,
            openSignup: true
        }
        dispatchLogin({type: 'OPEN-LOGIN', data: data})
    }

    return login[0] !== undefined && login[0].openLogin ? (
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
                        <Input class="input-form" text="Usuario"/>
                        <Input class="input-form" text="Contraseña"/>
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