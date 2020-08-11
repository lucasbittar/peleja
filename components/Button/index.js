import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Button({
  children,
  icon,
  iconOnly,
  onClick,
  primary,
  type,
  size,
  ...rest
}) {
  return (
    <Container
      onClick={() => onClick()}
      type={type}
      primary={primary}
      iconOnly={iconOnly}
      size={size}
      {...rest}
    >
      {icon}
      {!iconOnly && children}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  primary: PropTypes.bool,
  type: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
};
