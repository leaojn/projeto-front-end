import styled, { css } from 'styled-components';

const containerBackgroundActivate = (theme) => `
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`;

export const Container = styled.div`
  ${({ theme }) => css`
    ${({ theme, background }) => css`
      background: ${theme.colors.white};
      color: ${theme.colors.primaryColor};
      ${background && containerBackgroundActivate(theme)};
      min-height: 100vh;
    `}
  `}
`;
