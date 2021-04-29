import React from 'react'
import styled from 'styled-components';
const Home = () => {
    return (
        <div>
            <Heading>Hello User</Heading>
        </div>
    )
}
const Heading = styled.section`
    padding-top: 150px;
    font-size: 50px;
    text-align: center;
    height: 100vh;
`

export default Home
