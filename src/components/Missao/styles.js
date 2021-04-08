import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* align-self: center; */
    min-height: 30vh;

    background-color: ${theme.colors.primaryColor};
    /* align-items: center; */
    @media ${theme.media.lteMedium} {
      /* background-color: ${theme.colors.primaryColor}; */
      flex-direction: column;
    }
  `}
`;

export const Row = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
  `}
`;

export const Span = styled.div`
  ${({ theme }) => css`
    text-align: center;
    margin: 2rem;
    font-size: 1.8rem;
    color: white;
  `}
`;

export const LongText = styled.div`
  ${({ theme }) => css`
    max-width: 40rem;
    text-align: center;
    margin: 0rem 2rem 2rem 2rem;
    color: white;
    font-size: 1.2rem;
    /* font-family: 'Noto Serif JP', serif; */
  `}
`;
