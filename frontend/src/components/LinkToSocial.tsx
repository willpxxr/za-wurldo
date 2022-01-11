import {Nav, OverlayTrigger, Tooltip} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import React, {FC} from "react";

export interface LinkToSocialProps {
    name: String
    url: String
    icon: IconDefinition
    tooltip: String
}

export const LinkToSocial: FC<LinkToSocialProps> = (props) => (
    <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={ <Tooltip id={`${props.name}-tooltip`}>
            {props.tooltip}
        </Tooltip>}
    >
        <Nav.Link href={props.url.toString()}>
            <FontAwesomeIcon icon={props.icon}/>
        </Nav.Link>
    </OverlayTrigger>
)
