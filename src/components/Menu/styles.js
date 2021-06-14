import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';

const menuVisible = (theme) => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.div`
  ${({ theme, visible }) => css`
    position: fixed;
    z-index: 1;
    padding: 0;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    transition: all 300ms ease-in-ease-out;

    /* background-color: gray; */
    border-bottom: ${theme.colors.white};

    @media ${theme.media.lteMedium} {
      /* left: 0; */
      /* padding: 0; */
      visibility: hidden;
      opacity: 0;
      ${visible && menuVisible(theme)};
      > ${SectionContainer} {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        height: 80vh;
        align-items: center;
        overflow-y: auto;
      }
    }
  `}

  > ${SectionContainer} {
    padding-top: 2rem;
    padding-bottom: 0;
    padding: 0;
    display: grid;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* grid-template-columns: 1.5fr 1fr; */
  }
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space space-between;
    align-items: center;

    @media ${theme.media.lteMedium} {
      display: block;
      text-align: center;
      padding: ${theme.spacings.xxlarge};
      /* grid-template-columns: 1fr 1fr; */
    }
  `}
`;

export const Background = styled.div`
  ${({ theme }) => css`
    /* background-color: ${theme.colors.primaryColor}; */
  `}
`;

export const Button = styled.div`
  ${({ theme, visible }) => css`
    z-index: 6;
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    border: none;
    display: none;
    pointer-events: ${visible ? 'none' : 'all'};

    @media ${theme.media.lteMedium} {
      display: flex;
      text-align: center;
      justify-content: center;
    }
  `}
  > svg {
    width: 2.5rem;
    height: 2.5.rem;
  }
`;
