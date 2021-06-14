import * as Styled from './styles';
import P from 'prop-types';

export const Contact = ({ id }) => {
  let onSubmit = (e) => {
    let message =
      'Nome: ' +
      e.target['0'].value +
      '\n' +
      'Telefone: ' +
      e.target['1'].value +
      '\n' +
      'E-mail: ' +
      e.target['2'].value +
      '\n' +
      'Serviço: ' +
      e.target['3'].value +
      '\n';

    window.Email.send({
      Host: 'smtp.gmail.com',
      Username: 'falecomnetvistorias@gmail.com',
      Password: 'f2wuRnih3C!f',
      To: 'falecomnetvistorias@gmail.com',
      From: 'falecomnetvistorias@gmail.com',
      Subject: 'Contato pelo site',
      Body: message,
    }).then((message) => alert(message));
    e.preventDefault();
  };
  return (
    <Styled.ContactDiv id={id}>
      <Styled.Text>CONTATOS</Styled.Text>
      <Styled.ContactItens>
        <Styled.Form onSubmit={onSubmit}>
          <Styled.Input type="text" placeholder="Nome"></Styled.Input>
          <Styled.Input type="text" placeholder="Telefone"></Styled.Input>
          <Styled.Input type="text" placeholder="E-mail"></Styled.Input>
          <Styled.Input type="text" placeholder="Serviço"></Styled.Input>
          <Styled.Button type="submit">Enviar</Styled.Button>
        </Styled.Form>
        <Styled.ImageCar src="assets/images/Argo.svg"></Styled.ImageCar>
        <Styled.WhatsAppContact>
          <Styled.ImageCar src="assets/images/WhatsApp.svg"></Styled.ImageCar>
          <a
            rel="noreferrer"
            href="https://api.whatsapp.com/send?phone=5586999294818&text=Gostaria%20de%20saber%20mais"
            target="_blank"
          >
            <Styled.ButtonWhatsApp>WhatsApp</Styled.ButtonWhatsApp>
          </a>
        </Styled.WhatsAppContact>
      </Styled.ContactItens>
    </Styled.ContactDiv>
  );
};

Contact.propTypes = {
  id: P.string.isRequired,
};
