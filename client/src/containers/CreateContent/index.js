//Dependencies
import React, { useContext, useState, useEffect } from 'react';

//Components
import Input from '../../components/Input';
import Select from '../../components/Select';
import MenuOpciones from '../../components/MenuOpciones';

//Contexts
import { ContextContentStudy } from './store';

//Utils
import { actualizarPropiedadObjeto, validarPropiedadObjeto } from '../../utils/objetos';

//Containers
import SectionVideo from '../SectionVideo';
import SectionQuiz from '../SectionQuiz';

//Styles
const Styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        height: window.innerHeight - 50 - 100,
        flex: 10,
    },
    dashboard: {
        flex: 10,
        height: '100%',
        overflowY: 'auto'
    },
    menuOpciones: {
        flex: 2,
        height: '100%',
        background: '#F2EEEE'
    },
    titulo: {
        margin: 20,
        fontSize: 16,
        color: '#182AD2'
    },
    card: {
        border: '1px solid #F2EEEE',
        borderRadius: 5,
        margin: 30,
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center'
    },
    input: {
        width: '95%',
        border: '1px solid #C4C4C4',
        borderRadius: 5,
        height: 50,
        fontSize: 14,
        margin: 'auto',
        marginTop: 20,
        marginBottom: 20
    },
    btnGuardar: {
        textAlign: 'right',
        marginRight: 20,
        color: '#53B751',
        border: 'none',
        background: 'none'
    }
}


const CreateContent = (props) => {
    const { contentStudy, dispatchContentStudy } = useContext(ContextContentStudy);
    // const [ section, setSection ] = useState([]);
    // const [ titleSection, setTitleSection ] = useState("");
    const [ indexSection, setIndexSection ] = useState(0);
    const [ indexContent, setIndexContent ] = useState(0);
    const [ open, setOpen ] = useState(true);
    const handleInputChange = props => event => {
        const name = event.target.name;
        const newValue = event.target.value;
        const auxContentStudy = Object.create(contentStudy);
        const keys = name.split('.');
        if(props.validate){
            const keys = props.toValidate.split('.');
            const response = validarPropiedadObjeto(auxContentStudy,keys);
            console.log("response",response);
            if(!response){
                return false;
            }
        }
        if(name){
            actualizarPropiedadObjeto(auxContentStudy,keys,newValue);
            dispatchContentStudy({ type: 'ADD-SECTION', data: auxContentStudy})
            console.log("contentStudy",contentStudy);
        } else {
            return false;
        }
    }

    return (
        <div style={Styles.container} className="container">
            <div style={Styles.dashboard} className="dashboard">
                <p style={Styles.titulo}>Agregar nueva sección de contenido</p>
                <div style={Styles.card}>
                    <Input 
                        style={Styles.input} 
                        class="" 
                        icon="" 
                        text="Título de la sección" 
                        onChange={handleInputChange({validate: false, toValidate: ''})} 
                        name={`sections.${indexSection}.titleSection`}
                        // value={}
                    />
                    <SectionVideo open={open} setOpen={setOpen} indexSection={indexSection} setIndexSection={setIndexSection} indexContent={indexContent} setIndexContent={setIndexContent}/>
                    {/* <SectionQuiz  open={open} setOpen={setOpen} indexSection={indexSection} setIndexSection={setIndexSection} indexContent={indexContent} setIndexContent={setIndexContent}/> */}
                </div>
            </div>
            <MenuOpciones style={Styles.menuOpciones} className="menu-opciones" />
        </div>
    );
}

export default CreateContent;