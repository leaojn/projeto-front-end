import styled, { css } from 'styled-components';
import { TextComponent } from '../TextComponent';
export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
      /* height: 40vh; */
      /* overflow-x: none; */
    }
  `}
`;

export const Body = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.lteMedium} {
      /* height: 40vh; */
      overflow-y: scroll;
      overflow-x: hidden;
    }
  `}
`;

export const ImageCar = styled.img`
  ${({ theme }) => css`
    max-width: 100%;
    /* display: none; */
    /* order: 2; */
  `}
`;

export const Logo = styled.img`
  ${({ theme }) => css`
    width: 40%;
    height: 40%;

    @media ${theme.media.lteMedium} {
      width: 60%;
      height: 60%;
    }
  `}
`;

export const CarDiv = styled.div`
  ${({ theme }) => css`
    vertical-align: bottom;
    justify-content: center;
    display: flex;

    @media ${theme.media.lteMedium} {
      display: none;
      text-align: center;
      justify-content: center;
      /* order: 0; */
      /* flex-flow: column-reverse; */
    }
  `}
`;

export const LogoWhatsApp = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media ${theme.media.lteMedium} {
      flex-flow: row wrap;
      background-color: ${theme.colors.white};
      min-height: 40vh;
      /* color: black; */
      > ${Text} {
        color: black;
        text-align: center;
      }
      > ${Button} {
        display: none;
      }
    }
  `}
`;

export const Text = styled.div`
  ${({ theme }) => css`
    color: white;
    padding: 0;
    margin: 0;
    max-width: 19rem;
    font-size: 1.4rem;
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    /* padding: 12px 28px; */
    margin-top: 4rem;
    box-shadow: inset 0px 1px 3px 0px #91b8b3;
    background-color: ${theme.colors.secondaryColor};
    border-radius: 5px;
    border: 1px solid #566963;
    display: inline-block;
    cursor: pointer;
    color: ${theme.colors.white};
    font-family: Arial;
    font-size: 1.3rem;
    font-weight: bold;
    padding: 1.2rem 4.2rem;
    text-decoration: none;
    text-shadow: 0px -1px 0px #2b665e;
  `}
`;

export const Grid3 = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90vh;

    > ${Text} {
      margin-top: 3rem;
      max-width: 30rem;
      text-align: center;
    }
    > ${ImageCar} {
      width: 70%;
      height: 70%;
      /* background-color: red;/ */
      /* order: 0; */
    }
    @media ${theme.media.lteMedium} {
      background-color: white;
      width: 100%;
      height: 100%;
      height: 70vh;
      align-items: center;
      > ${Text} {
        color: black;
        margin-top: 0;
      }
      > ${Button} {
        order: 0;
      }
      > ${ImageCar} {
        width: 100%;
        height: 100%;
        /* background-color: red;/ */
        /* order: 2; */
      }
    }
  `}
`;

export const Grid4 = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    > ${Text} {
      margin-top: 2rem;
      max-width: 30rem;
      text-align: center;
      color: black;
    }
    > ${Button} {
      background-color: ${theme.colors.primaryColor};
      outline: none;
    }
    @media ${theme.media.lteMedium} {
      justify-content: end;
      height: 40vh;
    }
  `}
`;

export const Grid5 = styled.div`
  ${({ theme }) => css`
    min-height: 80vh;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > ${Text} {
      color: black;
      flex-basis: 100%;
      display: flex;
      min-width: 90vh;
      font-size: 1.4rem;
      margin-top: 6rem;
    }
    > ${ImageCar} {
      /* color: black; */
      width: 50%;
      height: 50%;
      /* order: 2; */
    }
    @media ${theme.media.lteMedium} {
      justify-content: end;
      min-height: 50vh;
      > ${Text} {
        min-width: 40vh;
        font-size: 1rem;
      }
      > ${ImageCar} {
        /* color: black; */
        width: 80%;
        height: 80%;
        /* order: 2; */
      }
    }
  `}
`;

export const DivImageLoupe = styled.div`
  ${({ theme }) => css`
    /* flex-basis: 100%; */

    > ${ImageCar} {
      /* color: black; */
      width: 60%;
      height: 60%;
    }
  `}
`;

export const Span = styled.div`
  ${({ theme }) => css`
    max-width: 22rem;
    @media ${theme.media.lteMedium} {
      min-width: 40vh;
    }
  `}
`;

export const Div = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    /* max-width: 22rem; */
    align-items: center;
    flex-direction: row;
    min-width: 100vh;
    background-color: red;
    /* flex-flow: row wrap; */
  `}
`;

export const Visao = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    margin-top: 2rem;

    justify-content: center;
    /* background-color: red; */
    width: 100%;
    > ${Text} {
      width: 100%;
      height: 100%;
      text-align: center;
      /* margin: 2rem; */
    }
  `}
`;

export const LongText = styled.div`
  ${({ theme }) => css`
    color: white;
    font-size: 1rem;
    margin: 3.5rem;
    max-width: 70rem;
    li {
      margin: 1rem;
    }
  `}
`;

export const Grid6 = styled.div`
  ${({ theme }) => css`
    /* min-width: 100vh; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* min-heigh: 100%; */
    background-color: ${theme.colors.primaryColor};
  `}
`;

export const Grid7 = styled.div`
  ${({ theme }) => css`
    /* min-width: 100vh; */
    /* min-height: 100vh; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media ${theme.media.lteMedium} {
      flex-direction: column;
    }
    > ${Text} {
      color: black;
      align-self: center;
      margin-bottom: 2rem;
      margin-top: 4rem;
      font-size: 2.5rem;
    }
    /* background-color: red; */
  `}
`;

export const RowTwoItens = styled.div`
  ${({ theme }) => css`
    /* min-width: 100vh; */
    /* min-height: 100vh; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media ${theme.media.lteMedium} {
      flex-direction: column;
    }
    > ${Text} {
      color: black;
    }
    /* background-color: red; */
  `}
`;
export const Card = styled.div`
  ${({ theme }) => css`
    /* position: relative; */
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 25rem;
    height: 15rem;
    margin: 8rem;
    border: 2px solid;
    background: linear-gradient(
      241.47deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 116.32%
    );
    border-radius: 12px; /* background-filter: blur(23.74) */
    border: 2;
    box-shadow: 0 0px 12px -1px rgba(0, 0, 0, 0.25);
    > ${Text} {
      font-size: 1rem;
      /* margin-bottom: 1rem; */
      color: black;
    }
    @media ${theme.media.lteMedium} {
      width: 100%;
      margin: 2rem;
    }
  `}
`;

export const CardName = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 14rem;
    align-self: top;
    display: flex;
    height: 3rem;
    margin-bottom: 15rem;
    background: ${theme.colors.secondaryColor};
  `}
  > ${Text} {
    font-size: 1rem;
    align-self: center;
    margin: 1rem;
    text-align: center;
  }
`;

export const Clients = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    > ${Text} {
      color: black;
      align-self: center;
      margin-bottom: 4rem;
      margin-top: 4rem;
      font-size: 2.5rem;
    }
    @media ${theme.media.lteMedium} {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  `}
`;

export const RowThreeItens = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-direction: row;
    > ${Text} {
      color: black;
    }
    > ${Logo} {
      width: 9rem;
      margin: 4rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
      align-self: center;
    }
    @media ${theme.media.lteMedium} {
      > ${Logo} {
        /* width: 5rem; */
        /* height: 5rem; */
        margin: 2.5rem;
        /* width: 90%; */
      }
    }
  `}
`;

export const ContactDiv = styled.div`
  ${({ theme }) => css`
  display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
    min-height: 80vh;
    background-color: ${theme.colors.secondaryColor};
  > ${Text} {
      color: black;
      align-self: center;
      margin-bottom: 4rem;
      margin-top: 4rem;
      font-size: 2.5rem;
      color: white;
    }
    @media ${theme.media.lteMedium} {
      flex-direction: column;
      justify-content: space-between;
    }
    }
  `}
`;

export const ContactItens = styled.div`
  ${({ theme }) => css`
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem;
    > ${ImageCar}{
      margin: 4rem;
      /* background-color: red; */
    }
    @media ${theme.media.lteMedium} {
      flex-direction: column;
      /* justify-content: space-between; */
    }
    }
  `}
`;

export const Form = styled.div`
  ${({ theme }) => css`
    flex-direction: column;
    display: flex;
    >${Button}{
      background-color: white;
      color: black;
      margin-top:1rem;
      border-radius: 0;
      margin: 0.5rem;
    }
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    /* flex-direction: row; */
    padding: 1rem;
    margin: 0.5rem;
    font-size: 20px;
    border-width: 1px;
    border-color: #CCCCCC;
    background-color: #ff6600;
    color: #FFFFFF;
    border-style: solid;
    border-radius: 0px;
    box-shadow: 0px 0px 1px rgba(66,66,66,.75);
    text-shadow: 0px 0px 5px rgba(66,66,66,.75);
    }
    :focus {
     outline:none;
  `}
`;

export const WhatsAppContact = styled.div`
  ${({ theme }) => css`
    /* flex-direction: row; */
    }
  `}
`;

export const YoutubeVideo = styled.div`
  ${({ theme }) => css`
    /* flex-direction: row; */
    }
  `}
`;
