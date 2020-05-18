import React from 'react';
import { TypeScale } from '@theme-ui/style-guide';
import { Styled } from 'theme-ui';

import { Text } from '../';

export default {
  title: 'Components | Typography',
};

export const Headings = () => (
  <>
    <Styled.h1>Heading 1 (2.53rem)</Styled.h1>
    <Styled.h2>Heading 2 (1.898rem)</Styled.h2>
    <Styled.h3>Heading 3 (1.424rem)</Styled.h3>
    <Styled.h4>Heading 4 (1.266rem)</Styled.h4>
    <Text fontSize="3">Subhead (1.125rem)</Text>
    <Text fontSize="2">Base (1rem)</Text>
    <Text fontSize="1">Label (0.889rem)</Text>
    <Text fontSize="0">Caption (0.79rem)</Text>
  </>
);

export const Body = () => (
  <Text>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
    of type and scrambled it to make a type specimen book. It has survived not only five centuries,
    but also the leap into electronic typesetting, remaining essentially unchanged. It was
    popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
    and more recently with desktop publishing software like Aldus PageMaker including versions of
    Lorem Ipsum
  </Text>
);

export const Scale = () => <TypeScale />;
