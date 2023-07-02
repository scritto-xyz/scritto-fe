import type { Component } from 'solid-js';
import { Box, Container } from "@suid/material";
import Login from "./components/login/Login";

const App: Component = () => {
    return (
        <div>
            <Login/>
        </div>
    );
};

export default App;
