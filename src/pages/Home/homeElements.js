import styled from "styled-components";

export const HomeContainer = styled.div`
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    position: relative;
    z-index: -10;

    :before{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: linear-gradient(
            180deg,
            rgba(0,0,0,0.2) 0%,
            rgba(0,0,0,0.6) 100%),
            linear-gradient(180deg, rgba(0,0,0,0.2) 0%,
            transparent 100%);
            z-index: 0;
    }
`;

export const HomeVideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #000;
`;

export const HomeText = styled.div`
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  justify-content: center;
  z-index: 4;
  align-content: center;
`;