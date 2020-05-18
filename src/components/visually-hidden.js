/** @jsx jsx */
import React from 'react';
import { Box, jsx } from 'theme-ui';
import { hideVisually } from 'polished';

const VisuallyHidden = (props) => (
  <Box
    sx={{
      ...hideVisually(),
    }}
    {...props}
  />
);

export default VisuallyHidden;
