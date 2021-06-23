import styled from "styled-components";
import { Link } from "react-router-dom";

export const MarketContainer = styled.div`
    position: flex;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;

    @media screen and (max-width: 760px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }

`;

export const MarketH1 = styled.h1`
    margin-top: 50px;
    font-size: 2.5rem;
    color: #000;
    margin-bottom: 64px;

    @media screen and (max-with: 480px) {
        font-size: 2rem;
    }
`;

export const MarketWrapper = styled.div`

    max-width: 1500px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 760px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;


export const Icon = styled(Link)`
    text-decoration: none;
    color: #000;
    font-weight: bold;
    font-size: 32px;
    margin-bottom: 20px;

    @media screen and (max-width: 400px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`;
