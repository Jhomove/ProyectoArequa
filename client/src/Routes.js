//Dependencies
import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";

//Components
import NotFound from './components/NotFound';

//Containers
import Home from './containers/Home';
import MenuSuperior from './components/MenuSuperior';

//Providers
import StateProviderLogin from './containers/Login/store';

const AppRoutes = () => (
    <BrowserRouter>
        <StateProviderLogin>
            <div className="main-container">
                <MenuSuperior/>
                <Route exact path="/" component={Home} />
            </div>
        </StateProviderLogin>
        {/* <Route component={NotFound} /> */}
    </BrowserRouter>
)
    

export default AppRoutes;