import * as ThemeUI from 'theme-ui';
import * as Modal from 'react-modal';

// Theme
export { default as theme } from './components/theme';

// Components
export { default as Modal } from './components/modal';
export const ReactModal = Modal;

// Layout
export { default as Flex } from './components/layout/flex';
export { default as Spacer } from './components/layout/spacer';
export { default as Stack } from './components/layout/stack';

// Table
export { default as Table } from './components/table';
export { default as Td } from './components/td';
export { default as Tr } from './components/tr';
export { default as THead } from './components/thead';

export { default as Global } from './components/global';
export { default as ThemeProvider } from './components/theme-provider';
export { default as VisuallyHidden } from './components/visually-hidden';
export { default as Button } from './components/button';
export { default as IconButton } from './components/icon-botton';
export { default as Heading } from './components/heading';
export { default as Header } from './components/header';
export { default as DropdownMenu } from './components/dropdown-menu';
export { default as Text } from './components/text';
export { default as Nav } from './components/nav';
export { default as Logo } from './components/logo';
export { default as SearchBox } from './components/searchbox';

export { default as Footer } from './components/footer';
export { default as Badge } from './components/badge';
export const Box = ThemeUI.Box;
export const Grid = ThemeUI.Grid;
export const Link = ThemeUI.Link;
export const Card = ThemeUI.Card;
export const Select = ThemeUI.Select;
export const Textarea = ThemeUI.Textarea;
export const Label = ThemeUI.Label;
export const Input = ThemeUI.Input;
export const Radio = ThemeUI.Radio;
export const Close = ThemeUI.Close;
export const Message = ThemeUI.Message;
export const NavLink = ThemeUI.NavLink;
export const Container = ThemeUI.Container;
export const Embed = ThemeUI.Embed;
export const Avatar = ThemeUI.Avatar;
export const Divider = ThemeUI.Divider;

// Utils
export const jsx = ThemeUI.jsx;
export const Styled = ThemeUI.Styled;

// Hooks
export const useColorMode = ThemeUI.useColorMode;
export const useThemeUI = ThemeUI.useThemeUI;
