//Dependencies
import React, { useState } from 'react';

//Components
import Input from '../Input';
import Button from '../Button';

//Images
import Arequa from '../../img/arequa.png';

const MenuSuperior = () => {
    const { isLogin, setIsLogin } = useState(false);
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
                        <Button class="btn-login" icon="" text="Iniciar sesión" function={null}/>
                        <Button class="btn-login" icon="" text="Registrarse" function={null}/>
                    </section>
                )
            }
        </div>
    );
}

export default MenuSuperior;