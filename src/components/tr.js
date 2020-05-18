/** @jsx jsx */
import React from 'react';
import { Box, jsx } from 'theme-ui';

const Tr = ({ props, children, sx }) => (
  <Box
    as="tr"
    sx={{
      transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
      borderBottom: '1px solid',
      borderColor: 'gray.0',
      ':hover': {
        backgroundColor: 'gray.0',
      },
      ...sx,
    }}
    {...props}
  >
    {children}
  </Box>
);

export default Tr;
