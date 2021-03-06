import {Container, Nav, Navbar} from "react-bootstrap";
import {Branding} from "./Branding";
import React, {FC} from "react";
import {Socials} from "./Socials";

export interface NavBarRoute {
    path: String | string,
    display: String | string
}
export interface NavbarMainProps {
    routes: NavBarRoute[]
}

export const NavbarMain: FC<NavbarMainProps> = (props) => (
    <Navbar bg="dark" variant="dark">
        <Container fluid>
            <Branding/>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav role="navigation" className="d-none d-md-flex">
                    { props.routes.map((route) => (
                        <Nav.Link href={route.path.toString()}>{route.display}</Nav.Link>
                    ))}
                </Nav>
                <Nav role= "socials" className="ms-auto pe-md-5">
                    <Socials/>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)
