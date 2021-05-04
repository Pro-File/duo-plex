import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

const Recommends = ({movies}) => {
    console.log(movies)
    return (
        <Container>
            <h3>Recommended For You</h3>
            <Content>
                { 
                    movies && movies.map((movie) => {
                        if(movie.type === 'recommend'){
                            console.log(movie)
                            return (
                            <Wrap key={movie.id}>
                            <Link to= {`/detail/${movie.id}`}>
                            <img src={`${movie.cardImg}`} alt={movie.title}/>
                            </Link>
                            </Wrap>
                            // console.log(movie.cardImg)
                            )
                        }
                    })
                }
            </Content>
        </Container>
    )
}
const Container = styled.div`
    padding : 0 0 26px;
    margin-top: 20px;

`

const Content = styled.div`
padding: 30px 0px 26px;
display: grid;
grid-gap: 25px;
grid-template-columns: repeat(4, minmax(0, 1fr));

@media (max-width: 768px){
grid-template-columns: repeat(2, minmax(0, 1fr));
}
@media (max-width: 400px){
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-gap: 20px;
    }
`
const Wrap = styled.div`
// padding-top: 56.25%;
width: 100%;
height: 100%;
display: block;
cursor: pointer;
flex-flow: column;
border-radius: 10px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
overflow: hidden;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
border: 2px solid rgb(249,249,249, 0.2);

img{
    inset: 0px;
    display: block;
    width: 100%;
    z-index: 1;
    object-fit: contain;
    transition: all 500ms ease-in-out;
}

&:hover{
    transform: scale(1.05);
    border: 3px solid rgb(249,249,249,0.8);
}

    
`
var mapState = (state) => ({
    movies: state.movies,
})

export default connect(mapState, null)(Recommends)
