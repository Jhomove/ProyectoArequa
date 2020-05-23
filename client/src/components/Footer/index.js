//Dependencies
import React, { useContext, useEffect } from 'react';

//Components
import About from '../About';
import Copyright from '../Copyright';
import SectionWithoutIcon from '../SectionWithoutIcon';

//Css
import './index.css';
import { GlobalContext } from '../../containers/Login/store';


const Footer = props => {

    const { globalState, globalDispatch } = useContext(GlobalContext);

    const listAboutSectionOne = [
        {
            text: 'Comparte tu conocimiento en arequa'
        },
        {
            text: 'Conoce nuestra aplicación'
        },
        {
            text: '¿Quiénes somos?'
        }
    ];

    const listAboutSectionTwo = [
        {
            text: 'Genera empleo'
        },
        {
            text: 'Ayuda y asistencia'
        }
    ]

    const listAboutSectionThree = [
        {
            text: 'Mapa del sitio'
        }
    ]

    return (
        <div style={props.style}>
            {
                0 ? null : (
                    <About class="footer-about">
                        <SectionWithoutIcon list={listAboutSectionOne}/>
                        <SectionWithoutIcon list={listAboutSectionTwo}/>
                        <SectionWithoutIcon list={listAboutSectionThree}/>
                    </About>
                )
            }
            <Copyright class="footer-copyright"/>
        </div>
    );
}

export default Footer;