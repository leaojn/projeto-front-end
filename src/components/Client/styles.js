import styled, { css } from 'styled-components';

export const Container = styled.div`
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
      flex-direction: column;

      > ${Logo} {
        margin-top: 0;
        margin: 3rem;
        margin-bottom: 0;
      }
    }
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

export const Text = styled.div`
  ${({ theme }) => css`
    color: white;
    padding: 0;
    margin: 0;
    max-width: 19rem;
    font-size: 1.4rem;
  `}
`;
