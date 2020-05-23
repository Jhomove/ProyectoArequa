import React, { useContext, useState, useEffect } from 'react';
import Input from '../../components/Input';
import InputFile from '../../components/InputFile';
import Button from '../../components/Button';
import { ContextContentStudy } from '../CreateContent/store';
import { actualizarPropiedadObjeto, validarPropiedadObjeto,getValueObject } from '../../utils/objetos';
import { validateInputs } from '../../utils/forms';
import Clip from '../../img/clip-de-papel.png';

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
    btnRight: {
        textAlign: 'right',
        marginRight: 20,
        color: '#53B751',
        border: 'none',
        background: 'none',
        fontSize: 14
    },
    btnLeft: {
        textAlign: 'left',
        marginRight: 20,
        color: '#53B751',
        border: 'none',
        background: 'none',
        fontSize: 14
    }
}

const SectionVideo = props => {
    const { contentStudy, dispatchContentStudy } = useContext(ContextContentStudy);

    const handleInputChange = props => event => {
        const name = event.target.name;
        const newValue = event.target.value;
        const auxContentStudy = Object.create(contentStudy);
        const keys = name.split('.');
        console.log("keys",keys);
        if(props.validate){
            const keys = props.toValidate.split('.');
            const response = validarPropiedadObjeto(auxContentStudy,keys);
            if(!response){
                return false;
            }
        }
        console.log("name",name);
        if(name){
            actualizarPropiedadObjeto(auxContentStudy,keys,newValue);
            if(props.indexSection !== undefined){
                const keysType = `sections.${props.indexSection}.content.${props.indexContent}.type`;
                console.log("keysType",keysType);
                if ( getValueObject(auxContentStudy, keysType) === null || getValueObject(auxContentStudy, keysType) === "" ){
                    actualizarPropiedadObjeto(auxContentStudy,keysType.split('.'),'video');
                    console.log("keysType",keysType);
                    console.log("auxContentStudy",auxContentStudy);
                }
            }
            dispatchContentStudy({ type: 'ADD-SECTION', data: auxContentStudy})
            console.log("contentStudy",contentStudy);
        } else {
            return false;
        }
    }

    const handleInputFileChange = props => event => {
        const name = event.target.name;
        const file = event.target.files[0];
        const internalName = file.name.replace(/ /g,'_');
        const newValue = `http://url_ficticia/${internalName}`;
        const auxContentStudy = Object.create(contentStudy);
        const keys = name.split('.');
        if(props.validate){
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
        if(name){
            actualizarPropiedadObjeto(auxContentStudy,keys,newValue);
            //Actualizar name interno del vídeo
            const auxKeys = [...keys];
            auxKeys[auxKeys.length - 1] = 'nameVideo';
            actualizarPropiedadObjeto(auxContentStudy,auxKeys,internalName);
            dispatchContentStudy({ type: 'ADD-SECTION', data: auxContentStudy})
            console.log("contentStudy",contentStudy);
        } else {
            return false;
        }
    }

    const handleAdd = event => {
        const keysTitle = `sections.${props.indexSection}.content.${props.indexContent}.titleVideo`;
        const keysUrl = `sections.${props.indexSection}.content.${props.indexContent}.urlVideo`;
        const title = getValueObject(contentStudy,keysTitle);
        const url = getValueObject(contentStudy,keysUrl);
        if(title === "" || url === ""){
            console.log("Debe llenar título y subir el vídeo");
            return false;
        }else {
            const auxContentStudy = Object.create(contentStudy);
            const keys = `sections.${props.indexSection}.content`.split('.');
            addTypeContent();
            if(validarPropiedadObjeto(auxContentStudy,keys)){
                auxContentStudy['sections'][props.indexSection]['content'].push({});
                dispatchContentStudy({ type: 'ADD-SECTION', data: auxContentStudy})
                props.setIndexContent(props.indexContent + 1);
                dispatchContentStudy({ type: 'ADD-SECTION', data: auxContentStudy})
            }
        }
    }

    const addTypeContent = () => {
        const auxContentStudy = Object.create(contentStudy);
        const keysType = `sections.${props.indexSection}.content.${props.indexContent}.type`;
        if ( getValueObject(auxContentStudy, keysType) === null || getValueObject(auxContentStudy, keysType) === "" ){
            actualizarPropiedadObjeto(auxContentStudy,keysType.split('.'),'video');
        }
    }

    const handleOpen = event => {
        const inputs = document.getElementsByClassName('input');
        const response = validateInputs(inputs);
        if(response){
            props.setIndexContent(props.indexContent + 1);
            props.setOpen(!props.open)
        }
        else 
            alert("Diligencie todos los campos");
    }

    return props.open ? (
        <div style={Styles.card}>
            <p style={Styles.titulo}>Sección crear nuevo vídeo</p>
            <Input
                style={Styles.input} 
                class="input" 
                icon="" 
                text="Título del vídeo"
                onChange={handleInputChange({validate: true, toValidate: `sections.${props.indexSection}.titleSection`})}
                name={`sections.${props.indexSection}.content.${props.indexContent}.titleVideo`}
                value={
                    getValueObject(
                        contentStudy,
                        `sections.${props.indexSection}.content.${props.indexContent}.titleVideo`
                    )
                }
            />
            <InputFile
                id={`sections.${props.indexSection}.content.${props.indexContent}.video`}
                icon={Clip} 
                alt="clip"
                class="input"
                onChange={handleInputFileChange({
                    validate: true, 
                    toValidate: [
                        `sections.${props.indexSection}.titleSection`,
                        `sections.${props.indexSection}.content.${props.indexContent}.titleVideo`
                    ]
                })}
                name={`sections.${props.indexSection}.content.${props.indexContent}.urlVideo`}
                value={
                    getValueObject(
                        contentStudy,
                        `sections.${props.indexSection}.content.${props.indexContent}.nameVideo`
                    )
                }
            />
            <Button style={Styles.btnRight} class="" icon="" text="Nuevo vídeo" function={handleAdd}/>
            {/* <Button style={Styles.btnLeft} class="" icon="" text="Agregar quiz" function={handleOpen}/> */}
        </div>
    ) : null;
}

export default SectionVideo;