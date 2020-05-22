import React from 'react';

//Components
import Logo from '../Logo';

const Copyright = props => {
    return (
        <div className={props.class}>
            <div>
                <Logo/>
            </div>
            <div>
                <p>Derechos de autor Aunar Developers Group</p>
            </div>
            <div>
                <p>Condiciones</p>
            </div>
            <div>
                <p>Política de privacidad y política de cookies</p>
            </div>
        </div>
    );
}

export default Copyright;