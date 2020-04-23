import React from 'react';
import { Box, Flex } from '../';

export default {
  title: 'Layout | Flex',
  component: Flex,
};

export const Default = () => (
  <Flex>
    <Box p={2} color="background" bg="primary" sx={{ flex: '1 1 auto' }}>
      Flex
    </Box>
    <Box p={2} bg="muted">
      Box
    </Box>
  </Flex>
);
