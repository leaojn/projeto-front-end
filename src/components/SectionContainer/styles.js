import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 0 auto;
    background-color: white;
    padding: ${theme.spacings.large};
  `}
`;
