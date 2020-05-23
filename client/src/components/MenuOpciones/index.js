//Dependencies
import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

//Containers
import { ContextContentStudy } from '../../containers/CreateContent/store';

//Images
import Expand from '../../img/expandir.png';

const Styles = {
    containerSection: {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto'
    },
    containerHeader: {
        height: 50,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        borderBottom: '1px solid #C4C4C4'
    },
    containerTitle: {
        flex: 10
    },
    containerMinimize: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    icons: {
        width: 10,
        height: 10
    },
    containerBody: {
        paddingLeft: 10,
        width: '95%',
        margin: 'auto',
    }
}

const MenuOpciones = props => {
    const {contentStudy} = useContext(ContextContentStudy);

    const handleShowChildren = id => event => {
    }

    return (
        <div style={props.style} className={props.class}>
                {
                contentStudy.sections.map((section,key) => (
                    <div key={uuidv4()}  style={Styles.containerSection}>
                        <div className="container-header" style={Styles.containerHeader}>
                            <div style={Styles.containerTitle}>
                                <p> {section.titleSection}</p>
                            </div>
                            <div style={Styles.containerMinimize} onClick={handleShowChildren(`section-container-${key}`)}>
                                <img style={Styles.icons} src={Expand} alt="expandir"/>
                            </div>
                        </div>
                        
                        <div id={`section-container-${key}`} data-show={true} style={Styles.containerBody}>
                            <div>
                                {
                                    section.content !== undefined ? section.content.map((elem,k) => (
                                            <p key={uuidv4()} style={{borderBottom: '1px solid #C4C4C4'}}>{elem.titleVideo}</p>
                                    )) : null
                                }
                            </div>
                        </div>
                    </div>
                    )
                )
            }
        </div>
    );
}

export default MenuOpciones;