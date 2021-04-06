import P from 'prop-types';
import * as styled from './styles';

export const Heading = ({
  children,
  colorDark = true,
  as = 'h1',
  size = 'hurge',
  uppercase = false,
}) => {
  return (
    <styled.Title
      colorDark={colorDark}
      as={as}
      size={size}
      uppercase={uppercase}
    >
      {children}
    </styled.Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['small', 'medium', 'big', 'hurge']),
  uppercase: P.bool,
};
