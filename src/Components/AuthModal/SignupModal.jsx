import React from 'react'
import ModalContainer from '../ModalContainer/ModalContainer'
import './AuthModal.css'
import SignUp from '../SignUp/SignUp';
const SignupModal = ({auth}) => {
    return (
        <ModalContainer>
            <div className = "auth-modal center">
                <SignUp/>
            </div>
        </ModalContainer>
       
    )
}

export default SignupModal
