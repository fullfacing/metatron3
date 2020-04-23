import React from 'react';
import { Table, THead, Td, Tr } from '../';

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
      <Tr>
        <Td>Warehouse monitoring stack</Td>
        <Td>Used to maintain optimal storage conditions.</Td>
      </Tr>
      <Tr>
        <Td>Warehouse monitoring stack</Td>
        <Td>Used to maintain optimal storage conditions.</Td>
      </Tr>
      <Tr>
        <Td>Warehouse monitoring stack</Td>
        <Td>Used to maintain optimal storage conditions.</Td>
      </Tr>
      <Tr>
        <Td>Warehouse monitoring stack</Td>
        <Td>Used to maintain optimal storage conditions.</Td>
      </Tr>
    </tbody>
  </Table>
);
