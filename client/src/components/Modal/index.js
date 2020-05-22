//Dependencies
import React from 'react';

const Modal = props => {
    return (
        <section className="modal">
            <section className="modal-mail">
                {props.children}
            </section>
        </section>
    );
}

export default Modal;