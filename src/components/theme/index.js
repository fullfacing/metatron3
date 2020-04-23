import fontSizes from './font-sizes';
import fonts from './fonts';
import space from './space';
import shadows from './shadows';

import buttons from './variants/buttons';
import text from './variants/text';
import cards from './variants/cards';
import forms from './variants/forms';
import messages from './variants/messages';
import badges from './variants/badges';
import links from './variants/links';
import layout from './variants/layout';

export default {
  breakpoints: ['40em', '56em', '64em'],
  space,
  fonts,
  letterSpacing: {
    heading: '-.02em',
    body: '.04em',
  },
  fontSizes,
  shadows,
  fontWeights: {
    body: 400,
    button: 700,
    heading: 900,
    bold: 700,
    black: 900,
  },
  lineHeights: {
    body: 1.6,
    heading: 1.125,
  },
  radii: [0, 4, 8, 16, 32, 9999],
  colors: {
    text: '#38383e',
    background: '#fff',
    primary: '#13AFE5',
    transparent: 'transparent',
    secondary: '#061B2B',
    muted: '#ebeeef',
    gray: [
      '#f8fafa',
      '#ebeeef',
      '#dce2e3',
      '#ccd4d7',
      '#bbc6c9',
      '#a8b5ba',
      '#92a3a8',
      '#778d93',
      '#5c6f75',
      '#364145',
    ],
    orange: [
      '#fffaf0',
      '#feebc8',
      '#fbd38d',
      '#f6ad55',
      '#ed8936',
      '#dd6b20',
      '#c05621',
      '#9c4221',
      '#7b341e',
    ],
    red: [
      '#fff5f5',
      '#fed7d7',
      '#feb2b2',
      '#fc8181',
      '#f56565',
      '#e53e3e',
      '#c53030',
      '#9b2c2c',
      '#742a2a',
    ],
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      letterSpacing: 'body',
    },
    hr: {
      color: 'gray.1',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      letterSpacing: 'heading',
      fontSize: 7,
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      letterSpacing: 'heading',
      fontSize: 6,
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      letterSpacing: 'heading',
      fontSize: 5,
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      letterSpacing: 'heading',
      fontSize: 4,
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      letterSpacing: 'heading',
      fontSize: 3,
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      letterSpacing: 'heading',
      fontSize: 2,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
  buttons,
  text,
  cards,
  forms,
  messages,
  badges,
  links,
  layout,
};
