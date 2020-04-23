const defaultStyles = {
  borderRadius: 4,
  borderColor: 'transparent',
  fontFamily: 'body',
  fontWeight: 'button',
  cursor: `pointer`,
  letterSpacing: 'default',
  lineHeight: `inherit`,
  boxShadow: 'default',
  transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  ':hover': {
    boxShadow: 'md',
  },
  ':active': {
    borderStyle: 'solid',
    transform: 'scale(.98)',
  },
  ':disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
};

export default {
  primary: {
    ...defaultStyles,
    color: 'background',
    bg: 'primary',
  },
  secondary: {
    ...defaultStyles,
    color: 'background',
    bg: 'gray.9',
  },
  danger: {
    ...defaultStyles,
    color: 'background',
    bg: 'red.6',
  },
  outline: {
    ...defaultStyles,
    color: 'primary',
    bg: 'transparent',
    border: '1px solid',
    borderColor: 'primary',
  },
  icon: {
    border: '1px solid',
    borderColor: 'text',
    height: '42px',
    width: '42px',
    minHeight: '42px',
    minWidth: '42px',
    padding: 1,
    '&:focus': {
      outline: 'none',
      borderColor: 'primary',
    },
  },
};
