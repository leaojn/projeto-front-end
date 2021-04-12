import * as Styled from './styles';
import P from 'prop-types';

export const Contact = ({ children }) => {
  return (
    <Styled.ContactDiv>
      <Styled.Text>CONTATOS</Styled.Text>

      <Styled.ContactItens>
        <Styled.Form>
          <Styled.Input type="text" value={name}></Styled.Input>
          <Styled.Input type="text" value={name}></Styled.Input>
          <Styled.Input type="text" value={name}></Styled.Input>
          <Styled.Input type="text" value={name}></Styled.Input>
          <Styled.Button>Enviar</Styled.Button>
        </Styled.Form>
        <Styled.ImageCar src="assets/images/Argo.svg"></Styled.ImageCar>
        <Styled.WhatsAppContact>
          <Styled.ImageCar src="assets/images/WhatsApp.svg"></Styled.ImageCar>
        </Styled.WhatsAppContact>
      </Styled.ContactItens>
    </Styled.ContactDiv>
  );
};

Contact.propTypes = {
  children: P.node.isRequired,
};
