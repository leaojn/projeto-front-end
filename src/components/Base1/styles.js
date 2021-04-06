import styled, { css } from 'styled-components';
import { TextComponent } from '../TextComponent';
export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1.5fr 1fr;
  `}
`;

export const ImageCar = styled.img`
  ${({ theme }) => css`
    max-width: 100%;

    @media ${theme.media.lteMedium} {
      display: none;
      text-align: center;
      justify-content: center;
    }
  `}
`;

export const Logo = styled.img`
  ${({ theme }) => css`
    width: 40%;
    height: 40%;
  `}
`;

export const CarDiv = styled.div`
  ${({ theme }) => css`
    vertical-align: bottom;
    justify-content: center;
    display: flex;
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
      display: none;
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
    /* padding: 0; */
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    height: 90vh;

    > ${Text} {
      margin-top: 6rem;
      max-width: 30rem;
      text-align: center;
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
  `}
`;

export const DivImageLoupe = styled.div`
  ${({ theme }) => css`
    flex-basis: 100%;
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
      font-size: 1.6rem;
    }

    > ${ImageCar} {
      color: black;
    }
  `}
`;

export const Span = styled.div`
  ${({ theme }) => css`
    max-width: 22rem;
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
      margin: 2rem;
    }
  `}
`;

export const Grid6 = styled.div`
  ${({ theme }) => css`
    min-width: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* min-heigh: 100%; */
    background-color: ${theme.colors.primaryColor};
  `}
`;

export const Grid7 = styled.div`
  ${({ theme }) => css`
    min-width: 100vh;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

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
