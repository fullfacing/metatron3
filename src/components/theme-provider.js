import React from 'react';
import { ThemeProvider as ThemeUIProvider } from 'theme-ui';
import theme from './theme';

const ThemeProvder = ({ children, ...props }) => (
  <ThemeUIProvider theme={theme} {...props}>
    {children}
  </ThemeUIProvider>
);

export default ThemeProvder;
