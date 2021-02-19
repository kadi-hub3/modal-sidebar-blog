import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { AppContext } from './context'


const Modal = () => {
    const { modal, closeModal } = useContext(AppContext)

    return (
        <div className={`${modal ? 'modal-overlay show-modal' : 'modal-overlay'}`}>
            <div className='modal-container'>
                <h3>Modal Content</h3>
                <button className='close-btn' onClick={closeModal}>
                    <FaTimes />
                </button>
            </div>

        </div>
    )
}

export default Modal
