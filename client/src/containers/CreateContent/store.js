import React, { createContext, useReducer } from 'react';
import ContentStudyReducer from './reducers';

export const ContextContentStudy = createContext();

const defaultData =
    {
        titleCourse: '',//título curso,
        idCourse: '',
        author: '',
        rating: '',
        sections: [
            /*{
                titleSection: 'título sección',
                content: [
                    {
                        type: 'video',
                        titleVideo: 'titulo video',
                        urlVideo: 'Del servidor donde vamos a guardar',
                        nameVideo: 'Nombre del vídeo'
                    },
                    {
                        type: 'quiz',
                        titleQuiz: 'título quiz',
                        questions: [
                            {
                                titleQuestion: 'Título de la pregunta',
                                typeOptions: 'Tipo de opción',
                                answer: index de la respuesta correcta
                                options: [
                                    {
                                        text: 'titulo opcion
                                    }
                                ]
                            }
                        ]
                    }
                ]       
            }*/
        ]
    }

const StateProviderContentStudy = props => {
    const [ contentStudy, dispatchContentStudy ] = useReducer(ContentStudyReducer,defaultData);

    return (
        <ContextContentStudy.Provider value={{contentStudy, dispatchContentStudy}}>
            { props.children}
        </ContextContentStudy.Provider>
    );
}

export default  StateProviderContentStudy;


