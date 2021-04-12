import * as Styled from './styles';
import P from 'prop-types';
import linksMock from '../NavLinks/mock';
import { Menu } from '../Menu';
import { TwoColumns01 } from '../TwoColumns01';
import { TwoColumns02 } from '../TwoColumns02';
import { OneColumn03 } from '../OneColumn03';
import { Missao } from '../Missao';
import { Client } from '../Client';
import { Cards } from '../Cards';
import { Contact } from '../Contact';

export const HomePage = ({ children }) => {
  return (
    <Styled.Container>
      <Menu links={linksMock}></Menu>
      <TwoColumns01></TwoColumns01>
      <TwoColumns02></TwoColumns02>
      <OneColumn03></OneColumn03>
      <Missao></Missao>
      <Client></Client>
      <Cards></Cards>
      <Contact></Contact>
    </Styled.Container>
  );
};

HomePage.propTypes = {
  children: P.node.isRequired,
};
