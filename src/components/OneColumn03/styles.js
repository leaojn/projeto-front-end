import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    margin-bottom: 2rem;
    @media ${theme.media.lteMedium} {
      display: none;
    }
  `}
`;

export const Span = styled.div`
  ${({ theme }) => css`
    align-self: start;
    width: 30rem;
    margin-left: 16rem;
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 40%;
  `}
`;
