import * as Styled from './styles';
import P from 'prop-types';
import { Style } from '@styled-icons/material-outlined';

export const TwoColumns01 = ({ children }) => {
  return (
    <Styled.Container>
      <Styled.ImageCarDiv>
        <Styled.ImageCar src="assets/images/hb20.png"></Styled.ImageCar>
      </Styled.ImageCarDiv>
      <Styled.LogoAndWhatsAppDiv>
        <Styled.Logo src="assets/images/logo.svg"></Styled.Logo>
        <Styled.Span>
          Conheça a melhor forma de comprar seu carro novo
        </Styled.Span>
        <Styled.Button>WhatsApp</Styled.Button>
      </Styled.LogoAndWhatsAppDiv>
    </Styled.Container>
  );
};

TwoColumns01.propTypes = {
  children: P.node.isRequired,
};
