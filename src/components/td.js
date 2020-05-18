import { Box } from 'theme-ui';

const Td = ({ props, children, sx }) => (
  <Box
    as="td"
    sx={{
      fontWeight: 'inherit',
      textAlign: 'left',
      opacity: 0.8,
      height: '64px',
      ...sx,
    }}
    {...props}
  >
    {children}
  </Box>
);

export default Td;
