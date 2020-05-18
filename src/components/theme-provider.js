/** @jsx jsx */
import React from 'react';
import { ThemeProvider as ThemeUIProvider, jsx } from 'theme-ui';
import theme from './theme';

const ThemeProvder = ({ children, ...props }) => (
  <ThemeUIProvider theme={theme} {...props}>
    {children}
  </ThemeUIProvider>
);

export default ThemeProvder;
