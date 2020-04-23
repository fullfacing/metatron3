const defaultStyles = {
  color: 'text',
  fontFamily: 'body',
  lineHeight: 'body',
  fontWeight: 'body',
  letterSpacing: 'body',
};

export default {
  caps: {
    ...defaultStyles,
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
  },
  body: {
    ...defaultStyles,
    opacity: 0.8,
  },
  heading: {
    color: 'text',
    fontFamily: 'heading',
    lineHeight: 'heading',
    fontWeight: 'heading',
    letterSpacing: 'heading',
  },
};
