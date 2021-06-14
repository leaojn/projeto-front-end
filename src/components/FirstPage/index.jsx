import * as Styled from './styles';
import { Menu } from '../Menu';
import { Base1 } from '../Base1';
import linksMock from '../NavLinks/mock';

export const FirstPage = () => {
  return (
    <Styled.Container>
      <Menu links={linksMock}></Menu>
      <Base1
        srcImage={'assets/images/hb20.png'}
        srcLogo={'assets/images/logo.svg'}
      ></Base1>
    </Styled.Container>
  );
};
