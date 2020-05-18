import { Box, Input } from 'theme-ui';
import PropTypes from 'prop-types';

import { Search } from 'react-feather';

import VisuallyHidden from './visually-hidden';

const Searchbox = ({ sx, id, label, onSubmit, ...props }) => {
  return (
    <Box as="form" onSubmit={onSubmit}>
      <Box
        role="search"
        sx={{
          position: 'relative',
        }}
      >
        <VisuallyHidden htmlFor={id} as="label">
          {label}
        </VisuallyHidden>
        <Input id={id} pl="6" {...props} />
        <Search
          size={24}
          sx={{
            color: 'gray.8',
            position: 'absolute',
            top: '.7rem',
            left: '.6rem',
          }}
        />
        <VisuallyHidden as="button">Submit</VisuallyHidden>
      </Box>
    </Box>
  );
};

Searchbox.defaultProps = {
  onSubmit: (event) => {
    event.preventDefault();
  },
  label: 'Search',
  placeholder: 'Search...',
};

Searchbox.propTypes = {
  id: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
};

export default Searchbox;
