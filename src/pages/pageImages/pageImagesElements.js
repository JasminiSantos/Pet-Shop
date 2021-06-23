import styled from "styled-components";

export const PageContainer = styled.div`
    background: #000;
    position: absolute;
`;


export const PageImagesContainer = styled.div`
    margin-top: 100px;
    background: #000;
    padding: 0 30px;
    height: auto;
    max-width: 100wv;
    column-count: 4;
    z-index: 1;

   @media screen and (max-width: 760px) {
        column-count: 3;
   }

`;

export const PageColumns = styled.div`

    height: auto;
    break-inside: avoid-column;
    margin-bottom: 10px;
    overflow: hidden;
`;

export const PageImagesLayout = styled.img`
    width: 100%;
    border-radius: 10px;
`;
