import React from 'react'
import styled from 'styled-components';

const Viewers = () => {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" alt=''/>
                <video autoPlay={true} loop={true} playsInline={true}>
                <source src="/videos/1564674844-disney.mp4" type="video/mp4"/>
                </video>  
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" alt=''/>
                <video autoPlay={true} loop={true} playsInline={true}>
                <source src="/videos/1564676714-pixar.mp4" type="video/mp4"/>
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" alt=''/>
                <video autoPlay={true} loop={true} playsInline={true}>
                <source src="/videos/1564676115-marvel.mp4" type="video/mp4"/>
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" alt=''/>
                <video autoPlay={true} loop={true} playsInline={true}>
                <source src="/videos/1608229455-star-wars.mp4" type="video/mp4"/>
                </video>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" alt=''/>
                <video autoPlay={true} loop={true} playsInline={true}>
                <source src="/videos/1564676296-national-geographic.mp4" type="video/mp4"/>
                </video>
            </Wrap>
        </Container>
    )
}

const Container  =styled.div`
margin-top : 35px;
padding: 30px 0px 26px;
display: grid;
grid-gap: 25px;
gap: 25;
grid-template-columns: repeat(5, minmax(0, 1fr));

@media (max-width: 768px){
grid-template-columns: repeat(1, minmax(0, 1fr));
}
`

const Wrap = styled.div`
// padding-top: 56.25%;
width: 100%;
height: 50%;
display: flex;
justify-content: center;
align-items: center;
flex-flow: column;
border-radius: 10px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
overflow: hidden;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
border: 2px solid rgb(249,249,249, 0.2);


img{
    inset: 0px;
    // display: block;
    // height: 100%;
    width: 100%;
    z-index: 1;
    object-fit: contain;
    position: relative;
    top: 50%;
    transition: all 500ms ease-in-out;
}
video{
    width: 100%;
    // display: block;
    object-fit: contain;
    height: 100%;
    position: relative;
    bottom: 50%;
    opacity: 0;
}
&:hover{
    transform: scale(1.05);
    border: 3px solid rgb(249,249,249,0.8);
    video{
        opacity: 1;
    }
}

`

export default Viewers
