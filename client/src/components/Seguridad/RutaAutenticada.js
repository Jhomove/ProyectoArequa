import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from '../../containers/Home';
import { GlobalContext } from '../../containers/Login/store';
import MenuIzquierda from '../../containers/MenuIzquierda';

const RutaAutenticada = props => {
    const { globalState, globalDispatch } = useContext(GlobalContext);

    return globalState.logged ? (
        <React.Fragment>
            <MenuIzquierda/>
            <Route
                component={ props.component }
                path={props.path}
            />
        </React.Fragment>
    ) : (
        <Redirect to="/"/>
    );
}

export default RutaAutenticada;