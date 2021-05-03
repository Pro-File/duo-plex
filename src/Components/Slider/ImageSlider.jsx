import React from 'react'
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const ImageSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }
    return (
            <Carousel {...settings}>
                <Wrap>
                    <a href="">
                        <img src="/images/slider-badging.jpg" alt=''/>
                    </a>
                </Wrap>
                <Wrap>
                    <a href="">
                        <img src="/images/slider-scale.jpg" alt=''/>
                    </a>
                </Wrap>
                <Wrap>
                    <a href="">
                        <img src="/images/slider-badag.jpg" alt=''/>
                    </a>
                </Wrap>
                <Wrap>
                    <a href="">
                        <img src="/images/slider-scales.jpg" alt=''/>
                    </a>
                </Wrap>
            </Carousel>
    )
}
const Carousel = styled(Slider)`
    margin-top: 20px;
    & > button{
        width: 5vw;
        height: 100%;
        z-index: 1;
    }    
    ul li button{
        &:before{
            font-size: 8px;
            color: rgb(158,158,171);
        }
    }
    li.slick-active button:before{
        color: #f9f9f9;
    }
    .slick-list{
        overflow: initial;
    }
    .slick-prev{
        left: 20px;
    }
    .slick-next{
        right: 20px;
    }
`
const Wrap = styled.div`
    border-radius: 5px;
    position: relative;
    a{
        border-radius: 5px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        position: relative;
        display: block;
        padding: 5px;
    
        img{
            width: 100%;
            height: 100%;
        }

        &:hover{
            padding: 0;
            z-index: 1000;
            transition: all 400ms ease;
            transform: scale(1.2);
            // border: 2px solid rgb(249,249,249, 0.8);
        }
    }
`
export default ImageSlider
