import React, { createContext, useReducer } from 'react';
import loginReducer from './reducers';

export const ContextLogin = createContext();

const StateProviderLogin = props => {
    const [ login, dispatchLogin ]  = useReducer(loginReducer,"");

    return (
        <ContextLogin.Provider value={{ login, dispatchLogin }}>
            {props.children}
        </ContextLogin.Provider>
    )
}

export default StateProviderLogin;