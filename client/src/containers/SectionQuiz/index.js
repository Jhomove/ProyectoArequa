import React, { useState, useContext, useEffect } from 'react';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { ContextContentStudy } from '../CreateContent/store';
import { actualizarPropiedadObjeto, validarPropiedadObjeto,getValueObject } from '../../utils/objetos';
import Button from '../../components/Button';

const Styles = {
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
    btnRigth: {
        textAlign: 'right',
        marginRight: 20,
        color: '#53B751',
        border: 'none',
        background: 'none'
    },
    btnLeft: {
        textAlign: 'left',
        marginRight: 20,
        color: '#53B751',
        border: 'none',
        background: 'none'
    }
}

const SectionQuiz = props => {
    const { contentStudy, dispatchContentStudy } = useContext(ContextContentStudy);
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

    useEffect(() => {
        console.log("props",props);
    }, [props])

    const handleInputChange = props => event => {
        const name = event.target.name;
        const newValue = event.target.value;
        const auxContentStudy = Object.create(contentStudy);
        const keys = name.split('.');
        if(props.validate) {
            let status = true;
            props.toValidate.every(element => {
                const keys = element.split('.');
                const response = validarPropiedadObjeto(auxContentStudy,keys);
                status = response;
                return !response ? response : true;
            });
            if(!status)
                return status;
        }
        if(name) {
            actualizarPropiedadObjeto(auxContentStudy,keys,newValue);
            const keysType = `sections.${props.indexSection}.content.${props.indexContent}.type`;
            if ( getValueObject(auxContentStudy, keysType) === null || getValueObject(auxContentStudy, keysType) === "" )
                actualizarPropiedadObjeto(auxContentStudy,keysType.split('.'),'quiz');
            dispatchContentStudy({ type: 'ADD-SECTION', data: auxContentStudy})
        }
    }

    const handleOpen = event => props.setOpen(!props.open)
    
    return !props.open ? (
        <div style={Styles.card}>
            <p style={Styles.titulo}>Sección crear nuevo quiz</p>
            <Input 
                style={Styles.input}
                class="" 
                icon="" 
                text="Título del quiz"
                onChange={
                    handleInputChange({validate: true, toValidate: [
                        `sections.${props.indexSection}.titleSection`
                    ]})
                }
                name={`sections.${props.indexSection}.content.${props.indexContent}.titleQuiz`}
                value={
                    getValueObject(
                        contentStudy,
                        `sections.${props.indexSection}.content.${props.indexContent}.titleQuiz`
                    )
                }
            />
            {/* <Select options={optionsSelect}/> */}
            {/* <p style={Styles.titulo}>Agregar nueva opción de respuesta</p>
            <p style={Styles.titulo}>Nueva pregunta</p>
            <p style={SRigth}>Agregar quiz</p> */}
            <Button style={Styles.btnLeft} class="" icon="" text="Agregar vídeo" function={handleOpen}/>
        </div>
    ) : null;
}

export default SectionQuiz;