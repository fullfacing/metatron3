/** @jsx jsx */
import { forwardRef } from 'react';
import { jsx, Button as ThemeUIButton } from 'theme-ui';

import PropTypes from 'prop-types';

const sizes = {
  small: {
    fontSize: 1,
    paddingY: 1,
    paddingX: 2,
  },
  medium: {
    fontSize: 2,
    paddingY: 2,
    paddingX: 3,
    height: '42px',
  },
  large: {
    fontSize: 3,
    paddingY: 2,
    paddingX: 3,
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
  sx: {},
};

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'danger']).isRequired,
  sx: PropTypes.object,
};

export default Button;
