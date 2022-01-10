import {Nav} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {FC} from "react";

export interface LinkToSocialProps {
    url: String
    icon: IconDefinition
}

export const LinkToSocial: FC<LinkToSocialProps> = (props) => (
    <Nav.Link href={props.url.toString()}>
        <FontAwesomeIcon icon={props.icon}/>
    </Nav.Link>
)
