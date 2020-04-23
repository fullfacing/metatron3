import React from 'react';
import { Nav, NavLink } from '../';

export default {
  title: 'Components | Nav',
  component: Nav,
};

export const Default = () => (
  <Nav label="Main">
    <NavLink aria-current="page">Home</NavLink>
    <NavLink>Clients</NavLink>
    <NavLink>Users</NavLink>
    <NavLink>Permissions</NavLink>
    <NavLink>Reports</NavLink>
    <NavLink>Configuration</NavLink>
  </Nav>
);
