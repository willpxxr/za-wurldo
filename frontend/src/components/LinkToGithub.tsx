import {Nav, OverlayTrigger, Tooltip} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";

export const LinkToGithub = () => (
    <OverlayTrigger overlay={
        <Tooltip id={"view-github-account"}>
            View Github Account
        </Tooltip>
    }>
        <Nav.Link href="https://github.com/willpxxr">
            <FontAwesomeIcon icon={faGithub}/>
            <span className="visually-hidden">link-to-github</span>
        </Nav.Link>
    </OverlayTrigger>
)
