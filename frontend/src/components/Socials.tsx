import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faDiscord} from "@fortawesome/free-brands-svg-icons/faDiscord";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {LinkToSocial} from "./LinkToSocial";
import React from "react";

const socials = [
    { url: "https://github.com/willpxxr", icon: faGithub, },
    { url: "https://www.linkedin.com/in/williamtjparr", icon: faLinkedin, },
    { url: "https://discord.com/users/291248097898528778", icon: faDiscord, },
    { url: "mailto:williamparr96@outlook.com", icon: faEnvelope, },
]

export const Socials = () => (
    <>
        { socials.map((social => (
            <LinkToSocial url={social.url} icon={social.icon} />
        )))}
    </>

)