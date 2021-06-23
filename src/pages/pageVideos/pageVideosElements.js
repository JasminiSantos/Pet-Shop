import styled from "styled-components";

export const PageContainer = styled.div`
    background: #000;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;


`;



export const MainVideoContainer = styled.div`
  background: #000;
  margin-top: 100px;
  height: auto;
  z-index: 5;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  -ms-flex-align: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;


`;

export const PageVideosContainer = styled.div`
    margin-top: 20px;
    background: #000;
    padding: 0 30px;
    height: auto;
    max-width: 100wv;
    column-count: 4;
    z-index: 1;


    @media screen and (max-width: 1000px) {
        column-count: 3;
   }


   @media screen and (max-width: 760px) {
        column-count: 2;
   }


   @media screen and (max-width: 480px) {
        column-count: 1;
   }


`;

export const PageVideosColumns = styled.div`

    height: auto;
    break-inside: avoid-column;
    border-radius: 5px;
    margin-bottom: 10px;
    overflow: hidden;
`;

export const PageVideosLayout = styled.video`
    width: 100%;
    border-radius: 10px;
`;

export const MainVideoLayout = styled.video`
  width: 60%;
  border-radius: 5px;

`;

export const MainVideosLink = styled.nav`
  color: #fff;
  cursor: pointer;
`;