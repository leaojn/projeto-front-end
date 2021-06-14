import * as Styled from './styles';
import P from 'prop-types';
import { EventAvailable } from '@styled-icons/material-outlined/EventAvailable';

export const TwoColumns03 = ({ id }) => {
  return (
    <Styled.Container id={id}>
      <Styled.Column30>
        <Styled.h2>VISTORIA DE ECV</Styled.h2>
        <Styled.Span>
          Vai transferir um veículo, a vistoria é necessária, e somos
          credênciados junto ao DETRAN-PI
        </Styled.Span>
        <EventAvailable height="100"></EventAvailable>
        <a
          rel="noreferrer"
          href="https://bit.ly/agendamentonetvistorias"
          target="_blank"
        >
          <Styled.Button>Agendar Vistoria</Styled.Button>
        </a>
      </Styled.Column30>
      <Styled.Column70>
        <Styled.Image src="assets/images/Group 29.png"></Styled.Image>
      </Styled.Column70>
    </Styled.Container>
  );
};

TwoColumns03.propTypes = {
  id: P.string.isRequired,
};
