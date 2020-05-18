const defaultStyles = {
  borderRadius: 2,
  borderColor: 'transparent',
  fontFamily: 'body',
  fontWeight: 'button',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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
    color: 'white',
    bg: 'primary',
  },
  secondary: {
    ...defaultStyles,
    color: 'white',
    bg: 'secondary',
  },
  danger: {
    ...defaultStyles,
    color: 'background',
    bg: 'red.0',
  },
  outline: {
    ...defaultStyles,
    color: 'primary',
    bg: 'transparent',
    border: '1px solid',
    borderColor: 'primary',
  },
  icon: {
    height: '42px',
    width: '42px',
    minHeight: '42px',
    minWidth: '42px',
    padding: 1,
    ':active': {
      transform: 'scale(.98)',
    },
    ':disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
};
