import { Text as ThemeUIText } from 'theme-ui';

import PropTypes from 'prop-types';

const Text = ({ sx, fontSize, variant, ...props }) => (
  <ThemeUIText
    sx={{
      fontSize,
      ...sx,
    }}
    variant={variant}
    {...props}
  />
);

Text.defaultProps = {
  variant: 'body',
  sx: {},
};

Text.propTypes = {
  sx: PropTypes.object,
};

export default Text;
