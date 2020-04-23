/** @jsx jsx */
import { jsx, Heading as ThemeUIHeading } from 'theme-ui';

import PropTypes from 'prop-types';

const Heading = ({ sx, fontSize, ...props }) => (
  <ThemeUIHeading
    sx={{
      fontSize,
      ...sx,
    }}
    {...props}
  />
);

Heading.defaultProps = {
  sx: {},
};

Heading.propTypes = {
  sx: PropTypes.object,
};

export default Heading;
