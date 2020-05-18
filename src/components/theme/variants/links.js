export default {
  menu: {
    color: 'text',
  },
  nav: {
    textAlign: 'center',
    fontSize: 1,
    px: 1,
    py: 2,
    mx: 2,
    cursor: 'pointer',
    borderTop: '4px solid',
    borderColor: 'transparent',
    transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    '&[aria-current="page"], &[aria-current="true"]': {
      borderColor: 'primary',
    },
  },
  pill: {
    textAlign: 'center',
    cursor: 'pointer',
    fontSize: 2,
    py: 2,
    px: [1, 2, 3],
    mx: 1,
    borderRadius: 4,
    transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    '&[aria-current="page"]': {
      boxShadow: 'default',
      color: 'white',
      bg: 'primary',
      ':hover': {
        boxShadow: 'md',
      },
    },
  },
};
