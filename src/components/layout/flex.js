/** @jsx jsx */
import { jsx, Flex as ThemeUIFlex } from 'theme-ui';
import PropTypes from 'prop-types';

const Flex = ({
  justifyContent,
  alignItems,
  flex,
  alignSelf,
  flexWrap,
  flexDirection,
  sx,
  ...props
}) => (
  <ThemeUIFlex
    sx={{ justifyContent, alignItems, flex, alignSelf, flexWrap, flexDirection, ...sx }}
    {...props}
  />
);

Flex.defaultProps = {
  justifyContent: undefined,
  alignItems: undefined,
  flex: undefined,
  alignSelf: undefined,
  flexWrap: undefined,
  flexDirection: undefined,
};

Flex.propTypes = {
  /**
   * Theme UI [sx prop](https://theme-ui.com/sx-prop)
   */
  sx: PropTypes.object,
};

export default Flex;
