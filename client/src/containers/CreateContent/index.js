import React from 'react';
import Input from '../../components/Input';
import InputFile from '../../components/InputFile';
import Clip from '../../img/clip-de-papel.png';
import Select from '../../components/Select';

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
        color: '#53B751'
    }
}

const CreateContent = () => {
    const optionsSelect = [
        {
            text: 'Selección múltiple, única respuesta',
            value: 'smur'
        },
        {
            text: 'Selección múltiple, mas de una respuesta',
            value: 'smmr'
        }
    ]
    return (
        <div style={Styles.container} className="container">
            <div style={Styles.dashboard} className="dashboard">
                <p style={Styles.titulo}>Agregar nueva sección de contenido</p>
                <div style={Styles.card}>
                    <Input style={Styles.input} class="" icon="" text="Título de la sección"/>
                    <div style={Styles.card}>
                        <p style={Styles.titulo}>Seccion crear nuevo contenido</p>
                        <Input style={Styles.input} class="" icon="" text="Título del vídeo"/>
                        <InputFile id="video" icon={Clip} alt="clip"/>
                        <p style={Styles.btnGuardar}>Agregar vídeo</p>
                    </div>
                    <div style={Styles.card}>
                        <p style={Styles.titulo}>Sección crear nuevo quiz</p>
                        <Input style={Styles.input} class="" icon="" text="Título de la pregunta"/>
                        <Select options={optionsSelect}/>
                        <p style={Styles.titulo}>Agregar nueva opción de respuesta</p>
                        <p style={Styles.titulo}>Nueva pregunta</p>
                        <p style={Styles.btnGuardar}>Agregar quiz</p>
                    </div>
                </div>
            </div>
            <div style={Styles.menuOpciones} className="menu-opciones">
            </div>
        </div>
    );
}

export default CreateContent;