import React from 'react'
import styled from "styled-components";

const CardHolder = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    width: 27%;
    margin-top: 20px;
    padding: 10px;
    font-family: 'Raleway', sans-serif;
    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`
const Img = styled.img`
    width: 100%;
    height: auto;
`
const Card = ({name, thumbUrl}) => (
    <CardHolder>
        <Img src={thumbUrl} />
        {name}
    </CardHolder>
)

export default Card