const defaultStyles = {
  paddingX: 2,
  paddingY: 1,
  borderRadius: 2,
};

export default {
  primary: {
    ...defaultStyles,
    color: 'background',
    bg: 'primary',
  },
  outline: {
    ...defaultStyles,
    color: 'primary',
    bg: 'transparent',
    border: '1px solid',
    borderColor: 'primary',
  },
  danger: {
    ...defaultStyles,
    color: 'background',
    bg: 'red.6',
  },
};
