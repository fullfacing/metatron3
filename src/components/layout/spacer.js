/** @jsx jsx */
import React from 'react';
import { Box, jsx } from 'theme-ui';

import PropTypes from 'prop-types';

const Spacer = ({ width, height, sx, props }) => <Box sx={{ width, height, ...sx }} {...props} />;

Spacer.propTypes = {
  width: PropTypes.instanceOf([Number, String]),
  height: PropTypes.instanceOf([Number, String]),
  /**
   * Theme UI [sx prop](https://theme-ui.com/sx-prop)
   */
  sx: PropTypes.object,
};

export default Spacer;
