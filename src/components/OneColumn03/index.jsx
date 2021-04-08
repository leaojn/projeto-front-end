import * as Styled from './styles';
import P from 'prop-types';

export const OneColumn03 = ({ children }) => {
  return (
    <Styled.Container>
      <Styled.Span>
        A NET Vistorias já tem mais de X anos no mercado
      </Styled.Span>
      <Styled.Image src="assets/images/car_loupe.svg"></Styled.Image>
    </Styled.Container>
  );
};

OneColumn03.propTypes = {
  children: P.node.isRequired,
};
