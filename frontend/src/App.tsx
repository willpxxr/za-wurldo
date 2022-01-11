import {useRoutes, RouteObject, Navigate} from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {NavbarMain,} from "./components/NavbarMain";
import {Container,} from "react-bootstrap";
import Contributions from "./components/Contributions";
import {Home} from "./components/Home";

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
        path: "/contributions",
        element: <Contributions/>,
        display: "Contributions",
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
            <Container className="mt-5">
                { useRoutes(routes) }
            </Container>
        </div>
    );
}

function B() {
    return (
        <Container fluid>
            <h1>B</h1>
        </Container>
    )
}
