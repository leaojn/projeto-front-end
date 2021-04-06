import * as Styled from './styles';
import P from 'prop-types';

export const Teste = ({ children }) => {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  );
};

Teste.propTypes = {
  children: P.node.isRequired,
};
