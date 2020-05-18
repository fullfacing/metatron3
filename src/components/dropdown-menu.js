/** @jsx jsx */
import React from 'react';
import { Box, jsx } from 'theme-ui';
import Proptypes from 'prop-types';

import useDropdownMenu from 'react-accessible-dropdown-menu-hook';

const DropdownMenu = ({ trigger, items, sx, ...props }) => {
  const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu(items.length);
  return (
    <Box as="span" sx={{ position: 'relative', ...sx }} {...props}>
      {trigger({ ...buttonProps, onClick: () => setIsOpen((current) => !current) })}
      <Box
        as="ul"
        sx={{
          listStyle: 'none',
          backgroundColor: 'background',
          margin: 'auto',
          minWidth: '80px',
          width: 'fit-content',
          marginTop: 1,
          padding: 2,
          borderRadius: 1,
          border: '1px solid',
          borderColor: 'gray.0',
          boxShadow: 'default',
          position: 'absolute',
          zIndex: 10,
          visibility: isOpen ? 'visible' : 'hidden',
          opacity: isOpen ? 1 : 0,
        }}
        role="menu"
      >
        {items.map((element, index) => (
          <li key={`menu-item-${index}`} sx={{ mb: 1 }}>
            {React.cloneElement(element, itemProps[index])}
          </li>
        ))}
      </Box>
    </Box>
  );
};

DropdownMenu.propTypes = {
  trigger: Proptypes.func,
};

export default DropdownMenu;
