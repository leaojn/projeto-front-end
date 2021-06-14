import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    min-height: 40rem;
    @media ${theme.media.lteMedium} {
      flex-direction: column;
      padding: 0;
    }
  `}
`;

export const Column70 = styled.div`
  ${({ theme }) => css`
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.colors.primaryColor};
    @media ${theme.media.lteMedium} {
      background-color: white;
      > ${Span} {
        color: black;
      }
    }
  `}
`;

export const Span = styled.div`
  ${({ theme }) => css`
    max-width: 30rem;
    text-align: center;
    font-size: 1.5rem;
    margin: 3rem 2rem 0rem 2rem;
    color: white;
    > p {
      margin-top: 2rem;
    }
    @media ${theme.media.lteMedium} {
      background-color: white;
      > p {
        margin-top: 1rem;
      }
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    margin-top: 1rem;
    margin-bottom: 2rem;
    box-shadow: inset 0px 1px 3px 0px #91b8b3;
    background-color: ${theme.colors.secondaryColor};
    border-radius: 5px;
    border: 1px solid ${theme.colors.secondaryColor};
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
      background-color: ${theme.colors.primaryColor};
      border: 1px solid ${theme.colors.primaryColor};
    }
  `}
`;
export const Image = styled.img`
  ${({ theme }) => css`
    width: 60%;

    @media ${theme.media.lteMedium} {
      margin-top: 3rem;
      width: 70%;
    }
  `}
`;

export const Column30 = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    > ${Span} {
      color: black;
      max-width: 22rem;
      font-size: 1.2rem;
    }
  `}
`;
