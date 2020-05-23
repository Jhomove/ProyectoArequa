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
        //cambiar a sintaxis de react y hacer validaciones
        const   username = document.getElementsByClassName('user')[0].value,
                pass     = document.getElementsByClassName('pass')[0].value,
                email    = document.getElementsByClassName('email')[0].value

        fetch("http://localhost:3100/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email    : email,
                name     : username,
                password : pass
            })
        })
        .then(res => res.json())
        .then((result) => {
            console.log(result)
            globalDispatch({type: 'OPEN-LOGIN', logged: true})
            if(result.success) {
                if(result.success) {
                    globalDispatch({type: 'OPEN-LOGIN', logged: true})
                    props.props.history.push('/crear-contenido');
                } else {
                    globalDispatch({type: 'OPEN-LOGIN', logged: false})
                }
            }
        },
        (error) => {
            console.log('Error', error)
        })
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
                        <Input class="input-form email" text="Email"/>
                        <Input class="input-form user" text="Nombre completo"/>
                        <Input class="input-form pass" type="password" text="Contraseña"/>
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