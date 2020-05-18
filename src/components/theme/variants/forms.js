export default {
  select: {
    boxShadow: 'default',
    fontfamily: 'inherit',
    paddingX: 3,
    paddingY: 1,
    borderRadius: 2,
    height: '42px',
    borderColor: 'gray.0',
    backgroundColor: 'gray.0',
    ':focus': {
      outline: 'none',
      borderColor: 'gray.2',
    },
  },
  textarea: {
    fontfamily: 'inherit',
    padding: 3,

    borderRadius: 2,
    borderColor: 'gray.0',
    backgroundColor: 'gray.0',
    ':focus': {
      outline: 'none',
      borderColor: 'gray.2',
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
    height: '48px',
    borderRadius: 2,
    borderColor: 'gray.0',
    backgroundColor: 'gray.0',
    color: 'text',
    ':focus': {
      outline: 'none',
      borderColor: 'gray.2',
    },
  },
};
