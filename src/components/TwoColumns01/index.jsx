import * as Styled from './styles';
import P from 'prop-types';

export const TwoColumns01 = ({ id }) => {
  return (
    <Styled.Container id={id}>
      <Styled.ImageCarDiv>
        <Styled.ImageCar src="assets/images/hb20.png"></Styled.ImageCar>
      </Styled.ImageCarDiv>
      <Styled.LogoAndWhatsAppDiv>
        <Styled.Logo src="assets/images/logo.svg"></Styled.Logo>
        <Styled.Span>
          Conheça a melhor forma de comprar seu carro novo
        </Styled.Span>
        <a
          rel="noreferrer"
          href="https://api.whatsapp.com/send?phone=5586995037994&text=Gostaria%20de%20saber%20mais"
          target="_blank"
        >
          <Styled.Button>WhatsApp</Styled.Button>
        </a>
      </Styled.LogoAndWhatsAppDiv>
    </Styled.Container>
  );
};

TwoColumns01.propTypes = {
  id: P.string.isRequired,
};
