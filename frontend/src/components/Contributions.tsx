import {
    Button,
    Carousel,
    CarouselItem, Col,
    Container, Image, Modal, ModalBody, ModalTitle, Nav, OverlayTrigger, Row, Tooltip,
} from "react-bootstrap";
import React, {FC, useState} from "react";
import ModalHeader from "react-bootstrap/ModalHeader";
import globalPayments from "../assets/global_payments.png"
import r3 from "../assets/r3.png"

const experiences = [
    {
        company: "R3",
        url: "https://www.r3.com/",
        description: `
            R3, a growing name in the digital trust ecosystem - providing platforms which aim to underpin regulated markets,
            and other use cases where multi-party trust is a requirement.
            It's primary offering is an enterprise blockchain platform named Corda, through which established parties may
            communicate in a private network - used by several major names in regulated markets such as capital markets and central banks.
        `,
        duration: "2020-Present",
        icon: r3,
        projects: [
            {
                name: "Managed Services",
                description: `
                `
            },
        ]
    },
    {
        company: "Global Payments",
        url: "https://www.globalpayments.com/",
        description: `
            Global Payments, an International Payments Company operating in 100 countries which process more than 50 Billion transactions per year.
            I had worked here as part of a company which historically was named Cayan, which was subsequently acquired by Total System Services (or TSYS)
            and later merged with Global Payments.
            It's primary offering was an all in one solution to enable acceptance of payment on behalf of Small-to-Medium Business (or SMB) - used by several
            major high street names, as well as vendors at the Super Bowl.
        `,
        duration: "2018-2020",
        icon: globalPayments,
        projects: [
            {
                name: "Genius 1",
                description: `
                `
            },
            {
                name: "Genius 2",
                description: `
                `
            }
        ]
    },

]
export const Contributions = () => (
    <Container fluid className="d-flex flex-column flex-grow-1 overflow-auto align-items-center justify-content-center">
        <Carousel className="container-fluid active d-flex flex-grow-1 overflow-auto mt-lg-5" variant="dark">
            { experiences.map(experience => (
                <CarouselItem className="text-white">
                    <Container className="mb-2">
                        <Row>
                            <Col md="auto">
                                <OverlayTrigger
                                    placement="left"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={ <Tooltip id={`${experience.company}-tooltip`}>
                                        Visit {experience.company}
                                    </Tooltip>}
                                >
                                    <Nav.Link href={experience.url.toString()}>
                                        <Image roundedCircle src={experience.icon}/>
                                    </Nav.Link>
                                </OverlayTrigger>
                            </Col>
                            <Col className="d-flex flex-column justify-content-center" md="auto">
                                <h1>{experience.company}</h1>
                                <p>{experience.duration}</p>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="align-text-top">
                        <p>{experience.description}</p>
                        <Container className="d-flex flex-column justify-content-center gap-2">
                            {experience.projects.map(project => (
                                <ProjectModal name={project.name} description={project.description}/>
                            ))}
                        </Container>
                    </Container>
                </CarouselItem>
            ))}
        </Carousel>
    </Container>
)

interface ProjectModalProps {
    name: String
    description: String
}

const ProjectModal: FC<ProjectModalProps> = (props) => {
    const [show, setShow] = useState<boolean>(false)

    return (
        <>
            <Button variant="dark" onClick={() => setShow(true)}>{props.name}</Button>
            <Modal show={show} onHide={() => setShow(false)}>
                <ModalHeader closeButton>
                    <ModalTitle>{props.name}</ModalTitle>
                </ModalHeader>
                <ModalBody>{props.description}</ModalBody>
            </Modal>
        </>
    )
}
