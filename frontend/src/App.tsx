import {useRoutes, RouteObject, Navigate} from "react-router-dom";
import React from "react";
import {NavbarMain,} from "./components/NavbarMain";
import {Container,} from "react-bootstrap";
import Contributions from "./components/Contributions";
import {Home} from "./components/Home";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import {Feature, FeatureFlag, FeatureFlags, isFeatureEnabled} from "./components/FeatureFlags";

interface DecoratedRouteObject extends RouteObject {
    display?: String,
    children?: DecoratedRouteObject[]
}

const RouteOrNull = (featureFlag: String, route: DecoratedRouteObject) => {
    if (isFeatureEnabled(featureFlag)) {
        return route
    } else return null
}

const routes: DecoratedRouteObject[] = [
    {
        path: "/",
        element: <Home/>,
        display: "Home",
    },
    RouteOrNull("contributions", {
        path: "/contributions",
        element: <Feature name={"contributions"}><Contributions/></Feature>,
        display: "Contributions",
    }),
    RouteOrNull("about", {
        path: "/about",
        element: <Feature name={"about"}><About/></Feature>,
        display: "About",
    }),
    {
        path: "*",
        element: <Navigate to="/"/>
    }
].filter((route) => (route != null)) as DecoratedRouteObject[]

const flags: FeatureFlag[] = [
    {
        name: "contributions",
        description: "Whether contributions area should be enabled or not",
        enabled: false,
    },
    {
        name: "about",
        description: "Whether about area should be enabled or not",
        enabled: false,
    },
]

export default function App() {
    return (
        <FeatureFlags flags={flags}>
            <div className="min-vh-100 d-flex flex-column bg-gunmetal">
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
        </FeatureFlags>
    );
}

function About() {
    return (
        <Container fluid>
            <h1>B</h1>
        </Container>
    )
}
