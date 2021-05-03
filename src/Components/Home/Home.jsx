import React from 'react'
import styled from 'styled-components';
import ImageSlider from '../Slider/ImageSlider';
import Viewers from '../Viewers/Viewers';
const Home = () => {
    return (
        <div>
            <Container>
            <ImageSlider/>
            <Viewers/>
            </Container>
        </div>
    )
}
const Container = styled.main`
position: relative;
min-height: calc(100vh - 250px);
overflow-x: hidden;
display: block;
top: 100px;
padding: 0 calc(3.5vw + 5px);
&:after{
    background: url('/images/home-background.png');
    background-repeat: no-repeat;
    backgound-size: 100% 100%, cover;
    background-position: fixed;
    content : "";
    position: absolute;
    inset: 0px;
    opacity: 1;
     z-index: -1;
}
`

export default Home
