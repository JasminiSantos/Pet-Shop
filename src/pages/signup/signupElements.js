import styled from "styled-components";

export const RegisterPageContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 760px;
    position: relative;
    z-index: 1;
`;

export const ResgisterPageWrap = styled.div`
    margin-top: 50px;
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: -2;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`;

export const RegisterPageContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {

        padding: 10px;
    }
`;

export const RegisterForm = styled.form`
    background: #000;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 40px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);

    @media screen and (max-width: 400px) {

        padding: 32px 32px;
    }
`;

export const RegisterFormH1 = styled.h1`
    margin-bottom: 20px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

export const RegisterFormLabel = styled.label`
    margin-bottom: 3px;
    font-size: 14px;
    color: #fff;
`;

export const RegisterFormInput = styled.input`
    padding: 10px 10px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    
    &:hover {
        background: #aff;
    }
`;

export const RegisterSubmit = styled.button`
    background: #2f9cb5;
    
    padding: 10px 0;
    border: none;
    border-radius: 4px;
    color: #000;
    font-size: 20px;
    cursor: pointer;
    font-weight: bold;
    visibility: ${({ registered }) => (registered ? "hidden" : "initial")};

    &:hover {
        background-color: #0255db;
    }
`;

export const RegistrationConfirmed = styled.p`
    padding: 0 120px;
    font-weight: bold;
    color: white;
    font-size: 20px;
    visibility: ${({ registered }) => (registered ? "initial" : "hidden")};
`;

