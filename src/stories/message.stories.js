import React from 'react';

import { Message } from '../';

export default {
  title: 'Components | Message',
  component: Message,
};

export const Default = () => <Message variant="primary">This is just a message</Message>;

export const Danger = () => (
  <Message variant="danger">This is just a message, but dangerous</Message>
);

export const Warning = () => (
  <Message variant="warning">This is just a message, but only a warning</Message>
);

export const Success = () => (
  <Message variant="success">This is just a message, but only when you do something right</Message>
);
