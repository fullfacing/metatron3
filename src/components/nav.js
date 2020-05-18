import { Flex } from 'theme-ui';

import PropTypes from 'prop-types';

const Nav = ({ children, label, sx, ...props }) => (
  <Flex
    aria-label={label}
    sx={{
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'flex-start',
      ...sx,
    }}
    as="nav"
    {...props}
  >
    {children}
  </Flex>
);

Nav.defaultProps = {
  label: 'Main',
};

Nav.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Nav;
