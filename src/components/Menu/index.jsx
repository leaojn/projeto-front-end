import * as Styled from './styles';
import P from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { Style } from '@styled-icons/material-outlined';
import { useState } from 'react';

export const Menu = ({ links = [], children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Styled.Button visible={visible} onClick={() => setVisible(true)}>
        {visible ? <CloseIcon /> : <MenuIcon />}
      </Styled.Button>
      <Styled.Container visible={visible} onClick={() => setVisible(false)}>
        <SectionContainer>
          <Styled.MenuContainer>
            <NavLinks links={links}></NavLinks>
          </Styled.MenuContainer>
          <Styled.Background></Styled.Background>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};

Menu.propTypes = {
  children: P.node.isRequired,
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};
