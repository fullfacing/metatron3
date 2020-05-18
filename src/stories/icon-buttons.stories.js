import React from 'react';
import { action } from '@storybook/addon-actions';

import { Check } from 'react-feather';

import { IconButton } from '../';

export default {
  title: 'Components | IconButton',
  parameters: {
    component: IconButton,
    componentSubtitle: 'Displays an interactive icon button.',
  },
};

export const Default = () => (
  <IconButton color="primary" onClick={action('clicked')} label="Toggle dark mode">
    <Check />
  </IconButton>
);
