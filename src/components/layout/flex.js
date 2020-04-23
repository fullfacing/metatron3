/** @jsx jsx */
import { jsx, Flex as ThemeUIFlex } from 'theme-ui';

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
  sx: {},
};

export default Flex;
