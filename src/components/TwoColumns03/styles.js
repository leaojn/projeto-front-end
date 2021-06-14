import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    min-height: 35rem;
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
    background-color: white;
    @media ${theme.media.lteMedium} {
      background-color: white;
      > ${Span} {
        color: black;
      }
    }
  `}
`;

export const h2 = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primaryColor};
    text-align: left;
    font-family: Arial;
  `}
`;

export const Span = styled.div`
  ${({ theme }) => css`
    max-width: 30rem;
    text-align: justify;
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
    /* padding: 12px 28px; */
    margin-top: 4rem;
    background-color: ${theme.colors.primaryColor};
    display: inline-block;
    cursor: pointer;
    color: ${theme.colors.secondaryColor};
    font-family: Arial, serif;
    font-size: 1rem;
    font-weight: bold;
    padding: 1.2rem 4.2rem;
    border-color: ${theme.colors.primaryColor};
    text-decoration: none;
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;

    @media ${theme.media.lteMedium} {
      margin-top: 3rem;
      width: 50%;
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
