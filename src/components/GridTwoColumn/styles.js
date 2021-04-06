import styled, { css } from 'styled-components';
import { Title } from '../Heading';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: ${theme.spacings.large};

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    }

    ${Title} {
      margin-bottom: ${theme.spacings.xlarge};
      color: ${theme.colors.secondaryColor};
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.lteMedium} {
      margin-botton: ${theme.spacings.large};
      text-align: center;
    }
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css``}
`;
