//Dependencies
import React from 'react';

//Components
import About from '../About';
import Copyright from '../Copyright';
import SectionWithoutIcon from '../SectionWithoutIcon';

//Css
import './index.css';


const Footer = props => {
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
        <div>
            {
                props.isLogin ? null : (
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