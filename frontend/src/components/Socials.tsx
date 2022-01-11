import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faDiscord} from "@fortawesome/free-brands-svg-icons/faDiscord";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {LinkToSocial} from "./LinkToSocial";
import React from "react";
import {faCalendar} from "@fortawesome/free-solid-svg-icons/faCalendar";

const socials = [
    {
        name: "Github",
        url: "https://github.com/willpxxr",
        icon: faGithub,
        tooltip: "View my github account",
    },
    {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/williamtjparr",
        icon: faLinkedin,
        tooltip: "View my linkedin account",
    },
    {
        name: "Discord",
        url: "https://discord.com/users/291248097898528778",
        icon: faDiscord,
        tooltip: "Message me on discord",
    },
    {
        name: "Email",
        url: "mailto:williamparr96@outlook.com",
        icon: faEnvelope,
        tooltip: "Send me an email",
    },
    {
        name: "Meeting",
        url: "https://calendly.com/willpxxr",
        icon: faCalendar,
        tooltip: "Book a meeting",
    }
]

export const Socials = () => (
    <>
        { socials.map((social => (
            <LinkToSocial name={social.name} url={social.url} icon={social.icon} tooltip={social.tooltip}/>
        )))}
    </>
)
