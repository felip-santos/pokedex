import { styled } from 'styled-components';

export const Section = styled.section`
    width: 100%;
    height: 90vh;
    background-image: linear-gradient(to left bottom, #fa693b, #f96c37, #f96f34, #f87330, #f7762c, #f87b29, #f98125, #f98622, #fb8f1f, #fc991d, #fda21b, #fdab1a);

    div.wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const ContentText = styled.div`
    width: 50%;

    h1 {
        color: #FFF;
        font-size: 4rem;
        line-height: 80px;
    }
    p {
        color: #F2F2F2;
        margin-top: 1rem;
        font-size: 1.25rem;
    }
`;

export const Image = styled.img`
    width: 40%;
`;