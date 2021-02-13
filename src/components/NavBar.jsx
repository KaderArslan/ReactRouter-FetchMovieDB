import React from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

function NavBar(props) {
  const [value, setValue] = React.useState("");
  let history = useHistory();
  const linkItems = props.links
    .filter((item) => item.islink)
    .map((item, index) => (
      <Link
        className="nav-link text-light"
        to={item.link}
        href={item.href}
        key={index}
      >
        {item.title}
      </Link>
    ));

  function handleSubmit(event) {
    setValue(value.toLowerCase());
    history.push(`/search/${value}`);
  }

  return (
    <Navbar bg="dark" className="navbar" variant="dark">
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto text-dark">{linkItems}</Nav>
        <Form inline onSubmit={handleSubmit}>
          <FormControl
            placeholder="Film Ara"
            aria-label="Search"
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
            }}
          />
          <Button variant="outline-light" type="submit">
            Ara
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
