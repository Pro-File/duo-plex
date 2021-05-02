import React from 'react';
import { connect } from 'react-redux';
import SignupModal from '../AuthModal/SignupModal';
import SigninModal from '../AuthModal/SigninModal';

var modalLookUp = {
    OpenSignUp : SignupModal,
    OpenSignIn: SigninModal,
}
const ModalManager = ({modal}) => {
    var renderedmodal = null;
    if(modal){
        var {modalType, modalProps} = modal;
        // console.log(modal)
        var ModalComponent = modalLookUp[modalType]
        renderedmodal = <ModalComponent {...modalProps}/>
    }
    return (
        <div>
            {renderedmodal}
        </div>
    )
}

var mapState = (state) => ({
    modal: state.modal,
})
export default connect(mapState)(ModalManager)
