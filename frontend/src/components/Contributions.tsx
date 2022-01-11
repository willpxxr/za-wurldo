import {
    Button,
    Carousel,
    CarouselItem,
    Container, Image, Modal, ModalBody, ModalTitle,
} from "react-bootstrap";
import React, {Component, FC, useState} from "react";
import payments from '../assets/payments.png'
import Holder from "holderjs";
import ModalHeader from "react-bootstrap/ModalHeader";

const experiences = [
    {
        company: "Global Payments (Cayan)",
        duration: "2018-2020",
        image: payments,
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
            <Container fluid className="d-block mx-auto">
                <Carousel className="active img-fluid" variant="dark">
                    { experiences.map(experience => (
                        <CarouselItem>
                            <Image src={experience.image} className="d-block mx-auto"/>
                            <Carousel.Caption>
                                <h1>{experience.company}</h1>
                                <p>{experience.duration}</p>
                                <h2>Projects</h2>
                                <Container className="d-grid gap-2">
                                { experience.projects.map(project => (
                                    <ProjectModal name={project.name} description={project.description}/>
                                ))}
                                </Container>
                            </Carousel.Caption>
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

