import styled from 'styled-components';

export const ContentCard = styled.div`
    width: 250px;
    height: 250px;
    display: flex;
    flex-flow: column;
    align-items: center;
    border-radius: 15px;
    justify-content: center;
    background-color: #F9F9F9;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, .4);
`

export const ImageCard = styled.img`
    width: 40%;
    object-position: center top;
`

export const TitleCard = styled.h2`
    color: #222;
    font-size: 1.3rem !important;
    margin: 2rem 0 1rem !important;
    text-transform: capitalize;
`

export const TextCard = styled.p`
    color: #333;
    font-size: 1rem;
    text-transform: capitalize;
`