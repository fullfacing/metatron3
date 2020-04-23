import React from 'react';
import { Card, Text } from '../';

export default {
  title: 'Components | Card',
  component: Card,
};

export const Primary = () => (
  <Card>
    <Text>Primary card</Text>
  </Card>
);

export const Compact = () => (
  <Card variant="compact">
    <Text>Compact card</Text>
  </Card>
);
