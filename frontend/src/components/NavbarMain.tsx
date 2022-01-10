import {Container, Nav, Navbar} from "react-bootstrap";
import {Branding} from "./Branding";
import {LinkToSocial} from "./LinkToSocial";
import React, {FC} from "react";
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import {faDiscord} from "@fortawesome/free-brands-svg-icons/faDiscord";

const socials = [
    { url: "https://github.com/willpxxr", icon: faGithub, },
    { url: "https://www.linkedin.com/in/williamtjparr", icon: faLinkedin, },
    { url: "https://discord.com/users/291248097898528778", icon: faDiscord, }
]

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
                    {socials.map((social => (
                        <LinkToSocial url={social.url} icon={social.icon} />
                    )))}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)