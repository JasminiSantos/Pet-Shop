import styled from "styled-components";
import { Link } from 'react-router-dom';


export const FormContainer = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: rgb(49,44,44);
background: radial-gradient(circle, rgba(49,44,44,1) 2%, rgba(212,192,205,1) 26%, rgba(211,194,194,1) 30%, rgba(217,203,203,1) 34%, rgba(158,152,152,1) 49%, rgba(214,198,198,1) 51%, rgba(212,201,234,1) 63%, rgba(206,196,228,1) 64%, rgba(0,0,0,1) 100%);
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`;

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 400px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {

        padding: 10px;
    }
`;

export const Form = styled.form`
    background: #000;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);

    @media screen and (max-width: 400px) {

        padding: 32px 32px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;


export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;

    &:hover {
        background: #aff;
    }
`;

export const FormButton = styled.button`
    background: #2f9cb5;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #000;
    font-size: 20px;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        background-color: #0255db;
    }
`;

export const Alert = styled.div`
    background: #c23030;
    text-align: center;
    justify-content: center;
    border: none;
    padding: 16px 0;
    height: 50px;
    border-radius: 6px;
    font-size: 1rem;
    margin-top: 10px;
    font-weight: bold;
`;