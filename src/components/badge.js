/** @jsx jsx */
import React from 'react';
import { Badge as ThemeUIBadge, jsx } from 'theme-ui';

import PropTypes from 'prop-types';

const Badge = (props) => <ThemeUIBadge {...props} />;

Badge.defaultProps = {
  variant: 'primary',
};

Badge.propTypes = {
  /**
   * Theme UI [sx prop](https://theme-ui.com/sx-prop)
   */
  sx: PropTypes.object,
  variant: PropTypes.oneOf(['primary', 'outline', 'danger']),
};

export default Badge;
