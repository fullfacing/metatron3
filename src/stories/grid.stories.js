import React from 'react';
import { Grid, Box } from '../';

export default {
  title: 'Layout | Grid',
  component: Box,
};

export const Default = () => (
  <Grid gap={2} columns={[2, null, 4]}>
    <Box color="background" bg="primary">
      Box
    </Box>
    <Box bg="muted">Box</Box>
    <Box color="background" bg="primary">
      Box
    </Box>
    <Box bg="muted">Box</Box>
  </Grid>
);
