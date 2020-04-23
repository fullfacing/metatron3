/** @jsx jsx */
import { jsx, Badge as ThemeUIBadge } from 'theme-ui';

import PropTypes from 'prop-types';

const Badge = (props) => <ThemeUIBadge {...props} />;

Badge.defaultProps = {
  variant: 'primary',
};

Badge.propTypes = {
  sx: PropTypes.object,
  variant: PropTypes.oneOf(['primary', 'outline', 'danger']),
};

export default Badge;
