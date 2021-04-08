import * as Styled from './styles';
import P from 'prop-types';

export const TwoColumns02 = ({ children }) => {
  return (
    <Styled.Container>
      <Styled.Column70>
        <Styled.Span>
          A NET VISTORIA é uma empresa que lhe ajuda a comprar um carro.
          <p>Interessou?? Tem Dúvidas?</p>
        </Styled.Span>
        <Styled.Button>Vamos Conversar</Styled.Button>
        <Styled.Image src="assets/images/strada.svg"></Styled.Image>
      </Styled.Column70>
      <Styled.Column30>
        <Styled.Span>
          A cada 4 veículos 1 apresenta algum tipo de restrição. Fuja do risco.
          Conte com a NET VISTORIAS
        </Styled.Span>
        <Styled.Button>Você Sabia?</Styled.Button>
      </Styled.Column30>
    </Styled.Container>
  );
};

TwoColumns02.propTypes = {
  children: P.node.isRequired,
};
