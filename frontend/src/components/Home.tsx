import {Container, Image,} from "react-bootstrap";
import React from "react";
import {Socials} from "./Socials";

export const Home = () => (
    <Container fluid className="d-flex flex-column flex-grow-1 overflow-auto text-white align-items-center justify-content-center">
        <Image
            roundedCircle={true}
            src="https://github.com/willpxxr.png"
        />
        <h1>William Parr</h1>
        <h4>Software Engineer</h4>
        <p>Software Engineer specialised in Kubernetes, DevOps and GitOps</p>
        <Container fluid className="d-flex justify-content-center">
            <Socials/>
        </Container>
    </Container>
)
