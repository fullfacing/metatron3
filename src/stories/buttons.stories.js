import React from 'react';
import { action } from '@storybook/addon-actions';

import { Button } from '../';

import { Flex, Box } from 'theme-ui';

export default {
  title: 'Components | Button',
  parameters: {
    component: Button,
    componentSubtitle: 'Displays an interactive button.',
  },
};

export const Primary = () => (
  <Flex>
    <Button onClick={action('clicked')} mr={2}>
      Primary Button
    </Button>
    <Button disabled>Disabled Button</Button>
  </Flex>
);

export const Secondary = () => (
  <Button variant="secondary" onClick={action('clicked')}>
    Secondary Button
  </Button>
);
export const Outline = () => (
  <Button variant="outline" onClick={action('clicked')}>
    Outline Button
  </Button>
);
export const Danger = () => (
  <Button variant="danger" onClick={action('clicked')}>
    Danger Button
  </Button>
);

export const Sizes = () => (
  <Box>
    <Button size="small" onClick={action('small clicked')} mr={2}>
      Small Button
    </Button>
    <Button size="medium" onClick={action('small clicked')} mr={2}>
      Medium Button
    </Button>
    <Button size="large" onClick={action('small clicked')}>
      Large Button
    </Button>
  </Box>
);
