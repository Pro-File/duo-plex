import {useEffect, React} from 'react'
import styled from 'styled-components';
import LatestOnDisney from '../LatestOnDisney/LatestOnDisney';
import Recommends from '../Recommends/Recommends';
import ImageSlider from '../Slider/ImageSlider';
import Viewers from '../Viewers/Viewers';
import Originals from '../Originals/Originals';
import Trendings from '../Trendings/Trendings';
import { FetchMovieonAuth } from '../../Redux/movies/movieActions';
import { connect } from 'react-redux';


const Home = ({FetchMovieonAuth}) => {
    useEffect(() => {
        FetchMovieonAuth();
    }, [FetchMovieonAuth])
    return (
        <div>
            <Container>
            <ImageSlider/>
            <Viewers/>
            <Recommends/>
            <LatestOnDisney/>
            <Originals/>
            <Trendings/>
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
    background-size: 100% 100%, cover;
    background-position: center;
    background-attachment: fixed;
    content : "";
    position: absolute;
    inset: 0px;
    opacity: 1;
     z-index: -1;
}
`

var actions = ({
    FetchMovieonAuth,
})
export default connect(null, actions)(Home)
