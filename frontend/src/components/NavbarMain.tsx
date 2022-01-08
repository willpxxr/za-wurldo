import {Container, Nav, Navbar} from "react-bootstrap";
import {Branding} from "./Branding";
import {LinkToGithub} from "./LinkToGithub";
import {LinkToLinkedin} from "./LinkToLinkedin";
import React from "react";

export const NavbarMain = () => (
    <Navbar bg="dark" variant="dark">
        <Container fluid>
            <Branding/>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav role="navigation" className="d-none d-md-flex">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="A">A</Nav.Link>
                    <Nav.Link href="B">B</Nav.Link>
                </Nav>
                <Nav role= "socials" className="ms-auto pe-md-5">
                    <LinkToGithub/>
                    <LinkToLinkedin/>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)