/** @jsx jsx */
import { jsx } from 'theme-ui';
import Flex from './layout/flex';
import Text from './text';

const Footer = ({ ...props }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    as="footer"
    sx={{
      py: 4,
      px: 2,
      bg: 'gray.9',
    }}
    {...props}
  >
    <Text
      as="small"
      color="white"
      sx={{
        fontSize: 0,
        fontWeight: 'bold',
      }}
    >
      2020 iFings (Pty) Ltd. All rights reserved.
    </Text>
  </Flex>
);

export default Footer;
