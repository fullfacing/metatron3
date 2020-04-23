/** @jsx jsx */
import React from 'react';
import { jsx, Box } from 'theme-ui';

import PropTypes from 'prop-types';

const fillArray = (space, numberOfChildren) => {
  // Note: We do not set space for the last child
  if (!Array.isArray(space)) {
    return new Array(numberOfChildren - 1).fill(space);
  }

  let newArray = [...space];
  while (newArray.length < numberOfChildren) {
    newArray = newArray.concat(space);
  }

  return newArray;
};

const Stack = ({ children, variant, space, ...props }) => {
  const spaces = fillArray(space, React.Children.count(children));
  return (
    <Box {...props}>
      {React.Children.map(children, (child, index) => (
        <Box
          sx={
            variant === 'column'
              ? { mb: spaces[index], display: 'block' }
              : { mr: spaces[index], display: 'inline-block' }
          }
        >
          {child}
        </Box>
      ))}
    </Box>
  );
};

Stack.propTypes = {
  space: PropTypes.oneOfType([Array, Number, String]),
  variant: PropTypes.oneOf(['row', 'column']),
  /**
   * Theme UI [sx prop](https://theme-ui.com/sx-prop)
   */
  sx: PropTypes.object,
};

Stack.defaultProps = {
  variant: 'column',
  space: 1,
};

export default Stack;
