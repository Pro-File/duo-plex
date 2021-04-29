import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import {openModal} from './../../Redux/modals/modalActions';

const Login = ({openModal}) => {
    return (
        <div>
            <Container>
                <Content>
                    <CTA>
                        <CTALogoOne src="./images/cta-logo-one.svg"/>
                        <Description>
                            Duo-Plex is a platform, where you can watch all of your favourite movies
                            with the Dual-Plex quality. You may get any movie with just one click!
                            Sign Up now and start watching!
                        </Description>
                        <StartNow onClick = {()=> openModal({modalType : "OpenAuthModal"})}>Start Now</StartNow>
                        <CTALogoTwo src="./images/cta-logo-two.png" alt="logos"/>
                    </CTA>
                    <Banner/>
                </Content>
            </Container>
        </div>
    )
}
const Container = styled.section`
    display: flex;
    overflow: hidden;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`
const Content = styled.div`
    margin-bottom: 10vw;
    min-height: 100vh;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    box-sizing: border-box;
    flex-direction: column;
    padding: 80px 40px;

`
const Banner = styled.div`
    background-image: url('/images/login-background.jpg');
    height: 100%;
    width: 100%;
    z-index: -1;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left:0;
`

const CTA =  styled.div`
margin-bottom: 2vw;
margin-top: 0;
margin-left: auto;
margin-right: auto;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
flex-direction: column;
transition: 300ms all ease-out;
max-width: 800px;
width: 100%;

`

const CTALogoOne = styled.img`
margin-bottom: 20px;
max-width: 500px;
min-height: 1px;
display: block;
width: 100%;
`
const CTALogoTwo = styled.img`
margin-top: 20px;
max-width: 500px;
min-height: 1px;
display: inline-block;
width: 100%;
`
const StartNow = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063a5;
    margin-bottom: 20px;
    width: 60%;
    letter-spacing: 6px;
    word-spacing: 12px;
    font-size: 18px;
    padding: 12px 0px;
    text-transform: uppercase;
    border-radius: 5px;
&:hover{
    background-color: #0483ee;
    transition: 300ms all ease;
    cursor: pointer;
}
`

const Description = styled.p`
    color: #f9f9f97;
    line-height: 1.6;
    margin: 0 0 24px;
    letter-spacing: 1.5px;
    font-size: 18px;
`
var actions  = ({
    openModal,
})
export default connect(null, actions)(Login)
