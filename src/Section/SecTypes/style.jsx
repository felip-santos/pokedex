import { styled } from 'styled-components';

export const Section = styled.section`
    padding: 4rem 0;
    background: #F9F9F9;

    h2 {
        color: #383838;
        font-weight: 600;
        font-size: 2.25rem;
        text-align: center;
    }
`;

export const ContainerTypes = styled.div`
    display: flex;
    gap: 2rem 4rem;
    flex-wrap: wrap;
    margin-top: 4rem;
    justify-content: space-between;

    a {
        flex: 30%;
        height: 90px;
        display: flex;
        padding: 0 32px;
        cursor: pointer;
        overflow: hidden;
        background: #FFF;
        border-radius: 10px;
        text-decoration: none;
        justify-content: space-between;
        box-shadow: 4px 4px 4px 0 rgba(173, 173, 173, 10%);
    }

    a h3 {
        font-size: 4rem;
        font-weight: 700;
        line-height: 90px;
        text-transform: capitalize;
        font-family: 'Dongle', sans-serif;
    }

    a img {
        height: 100px;
    }

    .cardType:last-child img {
        height: 90px;
    }
`;