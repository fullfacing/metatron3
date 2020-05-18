/** @jsx jsx */
import React, { forwardRef } from 'react';
import { Button as ThemeUIButton, jsx } from 'theme-ui';

import PropTypes from 'prop-types';

const sizes = {
  small: {
    fontSize: 1,
    paddingY: 1,
    paddingX: 2,
  },
  medium: {
    fontSize: 1,
    paddingY: 2,
    paddingX: 3,
    height: '42px',
  },
  large: {
    fontSize: 2,
    paddingY: 2,
    paddingX: 4,
  },
};

const Button = forwardRef(({ variant, size, width, sx, ...props }, ref) => (
  <ThemeUIButton
    type="button"
    ref={ref}
    variant={variant}
    sx={{
      width,
      ...sizes[size],
      ...sx,
    }}
    {...props}
  />
));

Button.defaultProps = {
  size: 'medium',
  variant: 'primary',
};

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'danger']).isRequired,
  /**
   * Theme UI [sx prop](https://theme-ui.com/sx-prop)
   */
  sx: PropTypes.object,
};

export default Button;
