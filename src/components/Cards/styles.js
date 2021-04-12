import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    /* @import url('https://fonts.googleapis.com/css?family=Exo:700'); */
    /* @import url('https://fonts.googleapis.com/css?family=Abel'); */
    background-color: #dfe6e9;
    -webkit-transform: perspective(900px);
    -webkit-transform-style: preserve-3d;
    /* display: flex; */
    /* flex-direction: row; */
  `}
`;

export const Div = styled.div`
  ${({ theme }) => css`
    /* margin: 16rem;
    background-color: red; */
    > ${Card} {
      left: 18rem;
    }
    @media ${theme.media.lteMedium} {
      > ${Card} {
        left: 3rem;
        margin-top: 10rem;
        /* transform: translatey(0); */
      }
    }
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    text-align: center;
    position: absolute;
    left: 55rem;
    width: 250px;
    height: 550px;
    margin-top: 20px;
    margin-bottom: 10px;
    background-image: linear-gradient(
      to bottom,
      #ff6600,
      #fa6400,
      #f56200,
      #f06000,
      #eb5e00
    );
    animation: animate 1s linear infinite;
    transition: 0.6s;

    /* transform: rotatex(75deg) translatey(-200px) translatez(-100px); */
    box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.5);
    &:hover {
      transform: rotatex(0deg);
      transition: 0.6s;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
    }
    > ${Image} {
      transform: translateY(15px);
      width: 180px;
      height: 150px;
    }
    h3 {
      font-size: 25px;
      /* font-family: 'Abel', sans-serif; */
      color: rgb(255, 255, 255);
      text-shadow: 0 0 2px rgb(255, 255, 255);
      transform: translatey(10px);
      margin: 2rem;
    }
    p {
      font-family: 'Abel', sans-serif;
      color: white;
      text-align: center;
      width: 230px;
      /* margin-top: 1rem; */
      font-size: 1.3rem;
      transform: translatex(12px);
    }
    @media ${theme.media.lteMedium} {
      left: 3rem;
      /* transform: translatex(700px); */
      margin-top: 50rem;
      /* top: 32rem; */
    }
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css``}
`;
