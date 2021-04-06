import styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  big: (theme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  hurge: (theme) => css`
    font-size: ${theme.font.sizes.xhurge};
    ${mediaFont(theme)};
  `,
};

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

const mediaFont = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.xlarge};
  }
`;

export const Title = styled.h1`
  ${({ theme, size, uppercase }) => css`{
    theme.colors.maingBg;
    ${titleSize[size](theme)};
    ${titleCase(uppercase)};
  `}
`;
