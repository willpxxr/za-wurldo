import {Image, Navbar} from "react-bootstrap";
import React from "react";

export const Branding = () => (
    <Navbar.Brand>
        <Image
            roundedCircle={true}
            src="https://github.com/willpxxr.png"
            width="40"
            height="40"
            className="d-inline-block align-top"
        />
    </Navbar.Brand>
)
