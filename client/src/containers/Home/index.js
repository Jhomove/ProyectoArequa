//Dependencies
import React, { useState } from 'react';

//Components
import Section from '../../components/Section';
import Footer from '../../components/Footer';

//Css
import './index.css';

//Imgs
import IconDefault from '../../img/ICON.png';

const Home = () => {
    const {isLogin, setIsLogin } = useState(false);
    const text = "Lorem ipsum dolor sit amet consectetur adipiscing, elit neque mattis ultricies nec placerat molestie, convallis ac parturient primis varius. Montes mollis tincidunt scelerisque semper id etiam nisi donec euismod, phasellus luctus molestie dui venenatis malesuada imperdiet.";
    return (
        <div className="main-container">
            <Section class={{seciontCard: "section-card", icon: "section-card-icon", content: "section-card-content", title: "section-card-title", text: "section-card-text"}} title="Título de prueba" paragraph={text} icon={IconDefault}/>
            <Section class={{seciontCard: "section-card", icon: "section-card-icon", content: "section-card-content", title: "section-card-title", text: "section-card-text"}} title="Título de prueba" paragraph={text} icon={IconDefault}/>
            <Section class={{seciontCard: "section-card", icon: "section-card-icon", content: "section-card-content", title: "section-card-title", text: "section-card-text"}} title="Título de prueba" paragraph={text} icon={IconDefault}/>
            <Footer isLogin={isLogin}/>
        </div>
    )
}

export default  Home;