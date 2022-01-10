import {useRoutes, RouteObject, Navigate} from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {NavbarMain,} from "./components/NavbarMain";
import {Container,} from "react-bootstrap";
import Experiences from "./components/ProjectsMain";

interface DecoratedRouteObject extends RouteObject {
    display?: String,
    children?: DecoratedRouteObject[]
}

const routes: DecoratedRouteObject[] = [
    {
        path: "/",
        element: <Home/>,
        display: "Home",
    },
    {
        path: "/projects",
        element: <Experiences/>,
        display: "Projects",
    },
    {
        path: "/about",
        element: <B/>,
        display: "About",
    },
    {
        path: "*",
        element: <Navigate to="/"/>
    }
]

export default function App() {
    return (
        <div style={{backgroundColor: '#313537', width: '100vw', height: '100vh'}}>
            <NavbarMain routes={
                routes.filter((route) => route.display != null).map((route => {
                    return {
                        path: route.path as String,
                        display: route.display!!,
                    }
                }))
            }/>
            { useRoutes(routes) }
        </div>
    );
}

function Home() {
    return (
        <Container fluid>
            <h1>willpxxr</h1>
            <p>Software Engineer</p>
        </Container>
    )
}



function B() {
    return (
        <Container fluid>
            <h1>B</h1>
        </Container>
    )
}
