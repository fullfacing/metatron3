import React from 'react';
import { Textarea } from '../';

export default {
  title: 'Forms | Textarea',
  component: Textarea,
};

export const Default = () => <Textarea defaultValue="Hi" rows={8} />;
