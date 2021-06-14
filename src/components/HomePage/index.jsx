import * as Styled from './styles';
import linksMock from '../NavLinks/mock';
import { Menu } from '../Menu';
import { TwoColumns01 } from '../TwoColumns01';
import { TwoColumns02 } from '../TwoColumns02';
import { OneColumn03 } from '../OneColumn03';
import { Missao } from '../Missao';
import { Client } from '../Client';
import { Cards } from '../Cards';
import { Contact } from '../Contact';

export const HomePage = () => {
  return (
    <Styled.Container>
      <Menu links={linksMock}></Menu>
      <TwoColumns01 id="home"></TwoColumns01>
      <TwoColumns02 id="net_vistoria"></TwoColumns02>
      <OneColumn03 id="empresa"></OneColumn03>
      <Missao></Missao>
      <Client></Client>
      <Cards></Cards>
      <Contact id="contato"></Contact>
    </Styled.Container>
  );
};
