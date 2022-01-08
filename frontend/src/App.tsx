import {
    Routes,
    Route,
} from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {NavbarMain} from "./components/NavbarMain";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="A" element={<A />} />
                <Route path="B" element={<B />} />
            </Route>
        </Routes>
    );
}

function Layout() {
    return (
        <NavbarMain/>
    );
}

function A() {
    return <h1>A</h1>;
}

function B() {
    return <h1>B</h1>;
}
