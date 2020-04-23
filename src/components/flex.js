/** @jsx jsx */
import { jsx, Flex as ThemeUIFlex } from 'theme-ui';

const Flex = ({ justifyContent, alignItems, flex, alignSelf, flexWrap, sx, ...props }) => (
  <ThemeUIFlex sx={{ justifyContent, alignItems, flex, alignSelf, flexWrap, ...sx }} {...props} />
);

export default Flex;
