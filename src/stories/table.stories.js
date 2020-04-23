import React from 'react';
import { Table, THead, Td } from '../';

export default {
  title: 'Components | Table',
  component: Table,
};

export const Default = () => (
  <Table>
    <THead>
      <tr>
        <Td as="th">Name</Td>
        <Td as="th">Description</Td>
      </tr>
    </THead>
    <tbody>
      <tr>
        <Td>Warehouse monitoring stack</Td>
        <Td>Used to maintain optimal storage conditions.</Td>
      </tr>
      <tr>
        <Td>Warehouse monitoring stack</Td>
        <Td>Used to maintain optimal storage conditions.</Td>
      </tr>
      <tr>
        <Td>Warehouse monitoring stack</Td>
        <Td>Used to maintain optimal storage conditions.</Td>
      </tr>
      <tr>
        <Td>Warehouse monitoring stack</Td>
        <Td>Used to maintain optimal storage conditions.</Td>
      </tr>
    </tbody>
  </Table>
);
