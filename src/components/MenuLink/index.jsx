import * as Styled from './styles';
import P from 'prop-types';
import { Link } from 'react-scroll';

export const MenuLink = ({ children, link, newTab = false }) => {
  const target = newTab ? '_blank' : '_self';
  if (newTab) {
    return (
      <a href={link} target={target} style={{ 'text-decoration': 'none' }}>
        <Styled.Container>{children}</Styled.Container>
      </a>
    );
  } else {
    return (
      <Link
        activeClass="active"
        to={link}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <Styled.Container>{children}</Styled.Container>
      </Link>
    );
  }
};

MenuLink.propTypes = {
  children: P.node.isRequired,
  link: P.string.isRequired,
  newTab: P.bool,
};
