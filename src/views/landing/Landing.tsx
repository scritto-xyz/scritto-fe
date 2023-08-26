import { Component } from "solid-js";
import { A } from "@solidjs/router";

const Landing: Component = () => {
    return (
        <div>
            <h1>Landing</h1>
            <A href={ '/home' }>To Click This You Need To Be Logged In</A>
        </div>
    );
};

export default Landing;