import React from 'react'
import ModalContainer from '../ModalContainer/ModalContainer'
import './authModal.css'
import SignUp from '../SignUp/SignUp';
const authModal = ({auth}) => {
    return (
        <ModalContainer>
            <div className = "test-modal center">
                <SignUp/>
            </div>
        </ModalContainer>
       
    )
}

export default authModal
