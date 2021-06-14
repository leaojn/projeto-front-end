import * as Styled from './styles';
import linksMock from '../NavLinks/mock';
import { Menu } from '../Menu';
import { TwoColumns01 } from '../TwoColumns01';
import { TwoColumns02 } from '../TwoColumns02';
import { TwoColumns03 } from '../TwoColumns03';
import { Missao } from '../Missao';
import { Client } from '../Client';
import { Cards } from '../Cards';
import { Contact } from '../Contact';

export const HomePage = () => {
  return (
    <Styled.Container>
      <Menu links={linksMock}></Menu>
      <Styled.ContainerMarginMenu>
        <TwoColumns01 id="home"></TwoColumns01>
        <TwoColumns02 id="net_vistoria"></TwoColumns02>
        <TwoColumns03 id="agendar"></TwoColumns03>
        <Missao></Missao>
        <Client></Client>
        <Cards></Cards>
        <Contact id="contato"></Contact>
      </Styled.ContainerMarginMenu>
    </Styled.Container>
  );
};
