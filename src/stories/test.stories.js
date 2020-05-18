import {
  Container,
  Nav,
  NavLink,
  Header,
  VisuallyHidden,
  Flex,
  Heading,
  Divider,
  Td,
  Footer,
  Input,
  Box,
  IconButton,
  Button,
  Table,
  Logo,
  THead,
} from '../';

export default {
  title: 'Components | Test',
};

export const Default = () => (
  <div>
    <Container>
      <Nav aria-label="Main menu" px={7} mb={7}>
        <NavLink aria-current="page">Home</NavLink>
        <NavLink>Clients</NavLink>
        <NavLink>Users</NavLink>
        <NavLink>Permissions</NavLink>
        <NavLink>Reports</NavLink>
        <NavLink>Configuration</NavLink>
      </Nav>
      <Header mb={7} alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Logo mr={2} mb={-1} />
          <Heading fontSize={5} as="h1" color="secondary">
            <VisuallyHidden>Ifings </VisuallyHidden>
            <span aria-hidden="true">|</span> Configurator
          </Heading>
        </Flex>

        <Flex alignItems="center">
          <Input aria-label="Search" type="search" placeholder="Search" mr={2} />
          <IconButton label="Settings" mr={2} />
          <IconButton label="Notifications" mr={2} />
          <IconButton label="Profile" />
        </Flex>
      </Header>

      <Nav label="Sub Sections" px={7} mb={7}>
        <NavLink variant="pill" aria-current="page">
          Stacks
        </NavLink>
        <NavLink variant="pill">Modules</NavLink>
        <NavLink variant="pill">Components</NavLink>
        <NavLink variant="pill">Observed property</NavLink>
        <NavLink variant="pill">Production</NavLink>
      </Nav>

      <Divider mb={7} />

      <main>
        <Flex alignItems="center" justifyContent="space-between" mb={7}>
          <Flex alignItems="center">
            <Input aria-label="Search table" type="search" placeholder="Search" mr={2} />
            <IconButton label="Settings" ml={2} />
            <IconButton label="Notifications" ml={2} />
          </Flex>

          <Flex>
            <IconButton label="Settings" mr={2} />
            <IconButton label="Notifications" mr={2} />
            <Button width={'100px'} as="a">
              Create
            </Button>
          </Flex>
        </Flex>

        <Box mb="20%">
          <Table>
            <THead>
              <tr>
                <Td as="th">Name</Td>
                <Td as="th" colspan="2">
                  Description
                </Td>
              </tr>
            </THead>
            <tbody>
              <tr>
                <Td>Warehouse monitoring stack</Td>
                <Td>Used to maintain optimal storage conditions.</Td>
                <Td>
                  <IconButton />
                </Td>
              </tr>
              <tr>
                <Td>Warehouse monitoring stack</Td>
                <Td>Used to maintain optimal storage conditions.</Td>
                <Td>
                  <IconButton />
                </Td>
              </tr>
              <tr>
                <Td>Warehouse monitoring stack</Td>
                <Td>Used to maintain optimal storage conditions.</Td>
                <Td>
                  <IconButton />
                </Td>
              </tr>
              <tr>
                <Td>Warehouse monitoring stack</Td>
                <Td>Used to maintain optimal storage conditions.</Td>
                <Td>
                  <IconButton />
                </Td>
              </tr>
            </tbody>
          </Table>
        </Box>
      </main>
    </Container>
    <Footer />
  </div>
);
