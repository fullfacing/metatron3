export default {
  select: {
    boxShadow: 'default',
    fontfamily: 'inherit',
    paddingX: 3,
    paddingY: 1,
    height: '42px',
    borderColor: 'gray.3',
    ':focus': {
      outline: 'none',
      borderColor: 'primary',
    },
  },
  textarea: {
    boxShadow: 'default',
    fontfamily: 'inherit',
    padding: 3,
    borderRadius: 3,
    ':focus': {
      outline: 'none',
      borderColor: 'primary',
    },
  },
  label: {
    fontSize: 1,
    fontWeight: 'bold',
    paddingLeft: 1,
    paddingBottom: 1,
  },
  input: {
    fontfamily: 'inherit',
    paddingX: 3,
    paddingY: 1,
    height: '42px',
    borderColor: 'gray.3',
    color: 'text',
    boxShadow: 'default',
    ':focus': {
      outline: 'none',
      borderColor: 'primary',
    },
  },
};
