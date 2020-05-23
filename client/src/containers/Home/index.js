//Dependencies
import React, { useState } from 'react';

//Components
import Section from '../../components/Section';
import Footer from '../../components/Footer';

//Css
import './index.css';

//Imgs
import IconDefault from '../../img/ICON.png';
import Login from '../Login';
import Signup from '../Signup';

const Home = props => {
    const [ isLogin, setIsLogin ] = useState(false);

    const text = "Lorem ipsum dolor sit amet consectetur adipiscing, elit neque mattis ultricies nec placerat molestie, convallis ac parturient primis varius. Montes mollis tincidunt scelerisque semper id etiam nisi donec euismod, phasellus luctus molestie dui venenatis malesuada imperdiet.";
    return (
        <div className="main-container">
            <Section class={{seciontCard: "section-card", icon: "section-card-icon", content: "section-card-content", title: "section-card-title", text: "section-card-text"}} title="Título de prueba" paragraph={text} icon={IconDefault}/>
            <Section class={{seciontCard: "section-card", icon: "section-card-icon", content: "section-card-content", title: "section-card-title", text: "section-card-text"}} title="Título de prueba" paragraph={text} icon={IconDefault}/>
            <Section class={{seciontCard: "section-card", icon: "section-card-icon", content: "section-card-content", title: "section-card-title", text: "section-card-text"}} title="Título de prueba" paragraph={text} icon={IconDefault}/>
            <Login props={props}/>
            <Signup props={props}/>
        </div>
    )
}

export default  Home;