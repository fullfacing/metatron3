import React from 'react';
import { Radio, Label } from '../';

export default {
  title: 'Forms | Radio',
  component: Radio,
};

export const Default = () => (
  <>
    <Label>
      <Radio name="dark-mode" value="true" defaultChecked={true} />
      Dark Mode
    </Label>
    <Label>
      <Radio name="dark-mode" value="false" />
      Light Mode
    </Label>
  </>
);
