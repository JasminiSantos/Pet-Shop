import styled from "styled-components";


export const DataH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    color: #000;
`;

export const DataP = styled.p`
    font-size: 1rem;
    text-align: center;
    color: #000;
`;

export const DataCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const DataIcon = styled.img`
    height: 120px;
    width: 120px;
    margin-bottom: 5px;
`;

export const DataIconLink = styled.a`
    color: #fff;
`;








