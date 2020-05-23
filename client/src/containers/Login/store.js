import React, { createContext, useReducer } from 'react';
import reducer from './reducers';

export const GlobalContext = createContext();

const StateProviderLogin = props => {
    const [ globalState, globalDispatch ]  = useReducer(reducer, {
        logged: false,
        openLogin: false,
        openSignup: false
    });
    return (
        <GlobalContext.Provider value={{ globalState, globalDispatch }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default StateProviderLogin;