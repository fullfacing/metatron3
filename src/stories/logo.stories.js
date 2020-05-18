import React from 'react';
import { Logo, Flex, theme } from '../';

export default {
  title: 'Other | Logo',
  component: Logo,
};

export const Default = () => (
  <>
    <Flex>
      <Flex p="4">
        <Logo />
      </Flex>
      <Flex p="4">
        <Logo color={theme.colors.black} secondaryColor={theme.colors.black} />
      </Flex>
      <Flex p="4">
        <Logo color={theme.colors.text} secondaryColor={theme.colors.text} />
      </Flex>
    </Flex>

    <Flex>
      <Flex p="4" bg="black">
        <Logo color={theme.colors.white} secondaryColor={theme.colors.white} />
      </Flex>
      <Flex p="4" bg="primary">
        <Logo color={theme.colors.white} secondaryColor={theme.colors.white} />
      </Flex>
      <Flex p="4" bg="secondary">
        <Logo color={theme.colors.white} secondaryColor={theme.colors.primary} />
      </Flex>
    </Flex>
  </>
);
