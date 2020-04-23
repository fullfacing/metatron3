/** @jsx jsx */
import { jsx, Box } from 'theme-ui';

const THead = ({ props, children, sx }) => (
  <Box
    as="thead"
    sx={{
      fontWeight: 'bold',
      textAlign: 'left',
      borderBottom: '1px solid',
      opacity: 1,
      borderColor: 'gray.1',
      ...sx,
    }}
    {...props}
  >
    {children}
  </Box>
);

export default THead;
