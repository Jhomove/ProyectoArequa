//Dependencies
import React, { useContext } from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";

//Components
import NotFound from './components/NotFound';

//Components
import MenuSuperior from './components/MenuSuperior';
import Footer from './components/Footer';

//Containers
import Home from './containers/Home';
import CreateContent from './containers/CreateContent';
import MenuIzquierda from './containers/MenuIzquierda';

//Providers
import StateProviderLogin, { ContextLogin} from './containers/Login/store';
import StateProviderContentStudy from './containers/CreateContent/store';
import RutaAutenticada from './components/Seguridad/RutaAutenticada';

//Styles
const Styles = {
    containerGeneral: {
        display: 'flex',
        flexDirection: 'column',
    },
    menuSuperior: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10
    },
    mainContainer: {
        flex: 10,
        display: 'flex',
        flexDirection: 'row'
    },
    footer: {
        flex: 1
    }
}

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <StateProviderLogin>
                <StateProviderContentStudy>
                    <div style={Styles.containerGeneral}>
                        <MenuSuperior style={Styles.menuSuperior}/>
                        <div style={Styles.mainContainer}>
                            <Route exact path="/" component={Home} />
                            <RutaAutenticada path="/crear-contenido" component={CreateContent}/>
                            {/* <Route path="/crear-contenido" component={CreateContent} /> */}
                        </div>
                        <Footer style={Styles.footer}/>
                    </div>
                </StateProviderContentStudy>
            </StateProviderLogin>
            {/* <Route component={NotFound} /> */}
        </BrowserRouter>
    )
}
    

export default AppRoutes;