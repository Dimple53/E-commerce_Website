import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Badge,
  Form,
  Dropdown,
  DropdownButton,
  Button,
  InputGroup,
} from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";

const HeaderComponents = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      //bg="danger"
      variant="dark"
      style={{
        backgroundColor: "navy",
      }}
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="/">EUROPA SHOP</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <InputGroup>
              <DropdownButton
                variant="secondary"
                id="dropdown-basic-button"
                title="All"
              >
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
              <Form.Control type="text" placeholder="Search" />
              <Button variant="warning">Warning</Button>
            </InputGroup>
          </Nav>
          <Nav>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#features">Pricing</Nav.Link>
            <Nav.Link href="#pricing">
              <Badge bg="danger">2</Badge>
              Cart
            </Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default HeaderComponents;
