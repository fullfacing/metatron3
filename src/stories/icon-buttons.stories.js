import React from 'react';
import { action } from '@storybook/addon-actions';

import { IconButton } from '../';

export default {
  title: 'Components | IconButton',
  parameters: {
    component: IconButton,
    componentSubtitle: 'Displays an interactive icon button.',
  },
};

export const Default = () => (
  <IconButton onClick={action('clicked')} label="Toggle dark mode">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentcolor"
    >
      <circle r={11} cx={12} cy={12} fill="none" stroke="currentcolor" strokeWidth={2} />
    </svg>
  </IconButton>
);
