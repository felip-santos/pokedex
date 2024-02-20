import { styled } from 'styled-components';

export const ContainerHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    transition: background 0.3s;
    
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    nav {
        width: 168.2834px;
    }

    .activeMenu {
        left: 0;
    }
`

export const ContentImage = styled.div`
    height: 100%;
    display: flex;
    align-items: center;

    h2 {
        color: #FFF;
        font-weight: 600;
        line-height: 42px;
        font-size: 2.1rem;
    }

    img {
        height: 60%;
        margin-left: .5rem;
    }
`

export const UlContent = styled.ul`
    display: flex;

    li {
        list-style: none;
    }

    li + li {
        margin-left: 1rem;
    }

    a {
        color: #F2F2F2;
        font-size: 1.25rem;
        text-decoration: none;
    }
`;

export const ContentMenu = styled.div`
    width: 30px;
    display: none;
    cursor: pointer;

    img {
        width: 100%;
        pointer-events: none;
    }

    @media screen and (max-width: 1024px) {
        display: flex;
    }
`;