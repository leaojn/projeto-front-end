import * as Styled from './styles';
import P from 'prop-types';

export const TwoColumns02 = ({ id }) => {
  return (
    <Styled.Container id={id}>
      <Styled.Column70>
        <Styled.Span>
          A NET VISTORIA é uma empresa que lhe ajuda a comprar um carro.
          <p>Interessou?? Tem Dúvidas?</p>
        </Styled.Span>
        <a
          rel="noreferrer"
          href="https://api.whatsapp.com/send?phone=5586995037994&text=Gostaria%20de%20saber%20mais"
          target="_blank"
        >
          <Styled.Button>Vamos Conversar</Styled.Button>
        </a>
        <Styled.Image src="assets/images/strada.svg"></Styled.Image>
      </Styled.Column70>
      <Styled.Column30>
        <Styled.Span>
          A cada 4 veículos 1 apresenta algum tipo de restrição. Fuja do risco.
          Conte com a NET VISTORIAS
        </Styled.Span>
        <a
          rel="noreferrer"
          href="https://api.whatsapp.com/send?phone=5586995037994&text=Gostaria%20de%20saber%20mais"
          target="_blank"
        >
          <Styled.Button>Você Sabia?</Styled.Button>
        </a>
      </Styled.Column30>
    </Styled.Container>
  );
};

TwoColumns02.propTypes = {
  id: P.string.isRequired,
};
