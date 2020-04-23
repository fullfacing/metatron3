import React from 'react';
import { Select, Label } from '../';

export default {
  title: 'Forms | Select',
  component: Select,
};

export const Default = () => (
  <>
    <Label htmlFor="select">Select</Label>
    <Select
      id="select"
      sx={{
        width: ['100%', '50%', '25%'],
      }}
      defaultValue="Hello"
    >
      <option>Hello</option>
      <option>Hi</option>
      <option>Awe</option>
      <option>Yo</option>
    </Select>
  </>
);
