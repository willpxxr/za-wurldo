import {
    Button,
    Carousel,
    CarouselItem, Col,
    Container, Modal, ModalBody, ModalTitle, Row,
} from "react-bootstrap";
import React, {Component, FC, useState} from "react";
import Holder from "holderjs";
import ModalHeader from "react-bootstrap/ModalHeader";


const experiences = [
    {
        company: "Global Payments",
        duration: "2018-2020",
        projects: [
            {
                name: "Legacy Genius Application",
                description: `
                    Participated in the maintenance of Global Payments' terminal product named Genius. Partaking in 
                    cutting new features
                `
            },
            {
                name: "Genius 2",
                description: `
                    Participated in the maintenance of Global Payments' terminal product named Genius. Partaking in 
                    cutting new features
                `
            }
        ]
    }
]

export default class Contributions extends Component {
    componentDidMount() {
        Holder.run()
    }

    render() {
        return (
            <Container fluid className="border d-flex flex-column flex-grow-1 overflow-auto text-white align-items-center justify-content-center">
                <Carousel className="container-fluid active d-flex flex-grow-1 overflow-auto align-items-center justify-content-center" variant="dark">
                    { experiences.map(experience => (
                        <CarouselItem className="d-flex flex-column flex-grow-1 overflow-auto text-white align-items-center justify-content-center">
                            <Container>
                                <Row className="border">
                                    <Col className="border">
                                        <h1>{experience.company}</h1>
                                    </Col>
                                    <Col className="mt-auto">
                                        <p>{experience.duration}</p>
                                    </Col>
                                </Row>
                            </Container>
                            <Container className="border align-text-top">
                                <h2>Projects</h2>
                                <Container className="border d-flex flex-column justify-content-center gap-2">
                                {experience.projects.map(project => (
                                    <ProjectModal name={project.name} description={project.description}/>
                                ))}
                                </Container>
                            </Container>
                        </CarouselItem>
                    ))}
                </Carousel>
            </Container>
        );
    }
}

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

