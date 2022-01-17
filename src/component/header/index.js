import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Headers() {
  return (
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
