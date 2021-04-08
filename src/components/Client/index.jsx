import * as Styled from './styles';
import P from 'prop-types';

export const Client = ({ children }) => {
  return (
    <Styled.Container>
      <Styled.Text>CLIENTES</Styled.Text>
      <Styled.RowThreeItens>
        <Styled.Logo src="assets/images/Hyundai.svg"></Styled.Logo>
        <Styled.Logo src="assets/images/Fiat.svg"></Styled.Logo>
        <Styled.Logo src="assets/images/Jeep.svg"></Styled.Logo>
      </Styled.RowThreeItens>
      <Styled.RowThreeItens>
        <Styled.Logo src="assets/images/Caoa.svg"></Styled.Logo>
        <Styled.Logo src="assets/images/Kia.svg"></Styled.Logo>
        <Styled.Logo src="assets/images/Mitsubishi.svg"></Styled.Logo>
      </Styled.RowThreeItens>
      <Styled.RowThreeItens>
        <Styled.Logo src="assets/images/Cherry.svg"></Styled.Logo>
        <Styled.Logo src="assets/images/Citroen.svg"></Styled.Logo>
        <Styled.Logo src="assets/images/Volvo.svg"></Styled.Logo>
      </Styled.RowThreeItens>
      <Styled.RowThreeItens>
        <Styled.Logo src="assets/images/Peugeot.svg"></Styled.Logo>
      </Styled.RowThreeItens>
    </Styled.Container>
  );
};

Client.propTypes = {
  children: P.node.isRequired,
};
