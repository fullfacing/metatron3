import fontSizes from './font-sizes';
import fonts from './fonts';
import space from './space';
import sizes from './sizes';
import shadows from './shadows';
import colors from './colors';

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
  sizes,
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
  colors,
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
