import type { Component } from 'solid-js';
import { Box, Container } from "@suid/material";
import Login from "./components/login/Login";

const App: Component = () => {
    return (
        <div>
            <Login/>
            {/*<Box>*/ }
            {/*  <p class="text-4xl text-green-700 text-center py-20">Hello tailwind!</p>*/ }
            {/*</Box>*/ }
        </div>
    );
};

export default App;
