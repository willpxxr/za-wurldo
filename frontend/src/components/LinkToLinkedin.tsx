import {Nav, OverlayTrigger, Tooltip} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";

export const LinkToLinkedin = () => (
    <OverlayTrigger overlay={
        <Tooltip id={"view-linkedin-account"}>
            View Github Account
        </Tooltip>
    }>
        <Nav.Link href="https://www.linkedin.com/in/williamtjparr/">
            <FontAwesomeIcon icon={faLinkedin}/>
            <span className="visually-hidden">link-to-github</span>
        </Nav.Link>
    </OverlayTrigger>
)
