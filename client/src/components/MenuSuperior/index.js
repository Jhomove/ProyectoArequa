//Dependencies
import React, { useState, useContext } from 'react';

//Components
import Input from '../Input';
import Button from '../Button';

//Images
import Arequa from '../../img/arequa.png';
import Login from '../../containers/Login';

//Context
import { ContextLogin } from '../../containers/Login/store';

const MenuSuperior = () => {
    const [ isLogin, setIsLogin ] = useState(false);
    const { login, dispatchLogin } = useContext(ContextLogin);

    const handleOpenModal = type => event => {
        let data = {};
        switch (type) {
            case 'login':
                data = {
                    login: false,
                    openLogin: true,
                    openSignup: false
                }
                dispatchLogin({type: 'OPEN-LOGIN',data: data});
                break;
            case 'logup':
                data = {
                    login: false,
                    openLogin: false,
                    openSignup: true
                }
                dispatchLogin({type: 'OPEN-LOGIN',data: data});
                break;
            default:
                break;
        }
    }
    return (
        <div className="menu-superior">
            <section className="section-icon">
                <img className="logo" src={Arequa} alt="logo"/>
            </section>
            {
                isLogin ? null :(
                    <section className="section-search">
                        <Input class="input-search" icon="" text="Buscar cursos"/>
                    </section>
                )
            }
            {
                isLogin ? null : (
                    <section className="section-login-logup">
                        <Button class="btn-login" icon="" text="Iniciar sesión" function={handleOpenModal('login')}/>
                        <Button class="btn-login" icon="" text="Registrarse" function={handleOpenModal('logup')}/>
                    </section>
                )
            }
        </div>
    );
}

export default MenuSuperior;