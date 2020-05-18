import React from 'react';
import { Nav, NavLink } from '../';

export default {
  title: 'Components | Nav',
  component: Nav,
};

export const Default = () => (
  <Nav label="Main">
    <NavLink>Home</NavLink>
    <NavLink aria-current="page">Clients</NavLink>
    <NavLink>Users</NavLink>
    <NavLink>Permissions</NavLink>
    <NavLink>Reports</NavLink>
    <NavLink>Configuration</NavLink>
  </Nav>
);
