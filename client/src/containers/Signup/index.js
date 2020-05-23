import React, { useContext } from 'react';
import { GlobalContext } from '../Login/store';
import Modal from '../../components/Modal';
import Input from '../../components/Input';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Clip from '../../img/clip-de-papel.png';

const Signup = props => {
    const { globalState, globalDispatch } = useContext(GlobalContext);

    const handleSignup = event => {

    }

    const handleClose = event => {
        globalDispatch({type: 'OPEN-LOGIN', openSignup: false})
    }

    const handleOpen = event => {
        globalDispatch({type: 'OPEN-LOGIN', openSignup: true})
    }


    return globalState.openSignup ? (
        <Modal>
            <div className="card-login">
                <section className="card-login-header">
                    <div className="card-login-header-title">
                        <h2>Registrate y comparte tu conocimiento</h2>
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
                        <Input class="input-form" text="Email"/>
                        <Input class="input-form" text="Nombre completo"/>
                        <Input class="input-form" text="Contraseña"/>
                    </div>
                </section>
                <section className="card-login-footer">
                    <Button class="btn-login-2" icon="" text="Regístrate" function={handleSignup}/>
                    <Link className="link" to="/">
                        Al registrarte, aceptas los terminos y condiciones 
                    </Link>
                    <p className="link" onClick={handleOpen}>
                        ¿Ya tienes una cuenta? Inicia sesión aquí
                    </p>
                    
                </section>
            </div>
        </Modal>
    ) : null;
}

export default Signup;