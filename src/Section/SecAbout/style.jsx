import { styled } from 'styled-components';

export const Section = styled.section`
    width: 100%;
    padding: 4rem 0;
    background-color: #FFF;

    div.wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const Image = styled.img`
    width: 48%;
    height: 450px;
    object-fit: cover;
    border-radius: 15px;
`;

export const ContentText = styled.div`
    width: 48%;

    h3 {
        position: relative;
        top: 10px;
        color: #5A5A5A;
        font-size: 1rem;
        font-weight: 500;
    }
    h2 {
        color: #383838;
        font-weight: 600;
        font-size: 2.25rem;
    }

    p {
        color: #6C6C6C;
        margin-top: 2rem;
        font-size: 1.25rem;
    }

    button {
        border: none;
        color: #FFFFFF;
        font-size: 1rem;
        font-weight: 600;
        margin-top: 3rem;
        padding: 15px 45px;
        border-radius: 5px;
        background-image: linear-gradient(to right top, #f67a26, #f7762c, #f97131, #f96d36, #fa693b);
    }
`;