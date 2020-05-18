/** @jsx jsx */
import React from 'react';
import { Heading as ThemeUIHeading, jsx } from 'theme-ui';

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
