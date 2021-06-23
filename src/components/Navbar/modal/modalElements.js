import styled from "styled-components";

export const ModalBg = styled.div`
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: fixed;
    background: rgba(0,0,0,0.9);
`;

export const ModalContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
    background: #fff;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    padding: 10px 20px;
    border-radius: 20px;
    justify-content: center; 

`;

export const ModalP = styled.p`
    margin-left: 100px;
    font-size: 2rem;
    justify-content: center;
    align-items: center;
`;

export const ModalH1 = styled.h1`
    margin-left: 20px;
    padding: 0 40px;
    color: #000;
    font: 2rem;
`;

export const ModalBtnClose = styled.button`
    font-size: 30px;
    margin-top: 5px;
    padding: 0 40px;
    background:  #fff;
    height: 50px;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        transition: 0.2s all ease-in-out;
        background: #303030;
    }
`;


export const ModalImg = styled.img`
    width: auto;
    height: auto;
`;

export const BuyBtn = styled.button`
    font-size: 30px;
    margin-top: 20px;
    padding: 0 40px;
    background: #2f9cb5;
    height: 50px;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        transition: 0.2s all ease-in-out;
        background: #0255db;
    }
`;