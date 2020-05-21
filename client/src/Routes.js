//Dependencies
import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";

//Components
import NotFound from './components/NotFound';

//Containers
import Home from './containers/Home';
import MenuSuperior from './components/MenuSuperior';

const AppRoutes = () => (
    <BrowserRouter>
        <div className="main-container">
            <MenuSuperior/>
            <Route exact path="/" component={Home} />
        </div>
        {/* <Route component={NotFound} /> */}
    </BrowserRouter>
)
    

export default AppRoutes;