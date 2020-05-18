/** @jsx jsx */
import React from 'react';
import { Box, jsx } from 'theme-ui';

const THead = ({ props, children, sx }) => (
  <Box
    as="thead"
    sx={{
      fontWeight: 'bold',
      textAlign: 'left',
      borderBottom: '1px solid',
      borderColor: 'gray.1',
      '& td': {
        opacity: 1,
      },
      ...sx,
    }}
    {...props}
  >
    {children}
  </Box>
);

export default THead;
