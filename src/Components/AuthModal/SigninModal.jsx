import React from 'react'
import ModalContainer from '../ModalContainer/ModalContainer'
import './AuthModal.css'
import SignIn from '../SignIn/SignIn';
const SigninModal = ({auth}) => {
    return (
        <ModalContainer>
            <div className = "auth-modal center">
                <SignIn/>
            </div>
        </ModalContainer>
       
    )
}

export default SigninModal
