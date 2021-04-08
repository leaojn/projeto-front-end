import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    min-height: 40rem;
    @media ${theme.media.lteMedium} {
      flex-direction: column-reverse;
      padding: 0;
    }
  `}
`;

export const ImageCarDiv = styled.div`
  ${({ theme }) => css`
    flex: 2;
    display: flex;
    flex-direction: column;
  `}
`;

export const ImageCar = styled.img`
  ${({ theme }) => css`
    align-self: center;
    margin-top: auto;
    width: 70%;
    @media ${theme.media.lteMedium} {
      width: 85%;
    }
  `}
`;

export const LogoAndWhatsAppDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primaryColor};

    @media ${theme.media.lteMedium} {
      background-color: white;
    }
  `}
`;

export const Logo = styled.img`
  ${({ theme }) => css`
    /* width: 30%; */
    width: 50%;
    /* height: 30vh; */
  `}
`;

export const Span = styled.div`
  ${({ theme }) => css`
    /* width: 30%; */
    text-align: center;
    color: white;
    margin: 2rem;
    font-size: 1.5rem;
    max-width: 20rem;
    @media ${theme.media.lteMedium} {
      color: black;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    /* width: 30%; */
    /* text-align: left; */
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

    @media ${theme.media.lteMedium} {
      /* color: black; */
      /* padding: 1.2rem 2.2rem; */
      margin-top: 2rem;
    }
  `}
`;
