import {useRoutes, RouteObject, Navigate} from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {NavbarMain,} from "./components/NavbarMain";
import {Container,} from "react-bootstrap";

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
        path: "/A",
        element: <A/>,
        display: "The A",
    },
    {
        path: "/B",
        element: <B/>,
        display: "The B",
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
            <h1>Home</h1>
        </Container>
    )
}

function A() {
    return (
        <Container fluid>
            <h1>A</h1>
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
