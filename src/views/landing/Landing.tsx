import { Component } from "solid-js";
import { A } from "@solidjs/router";
import './index.scss';
import NavBar from "../../components/navbar/NavBar";
import SeekrSearch from "../../components/search/SeekrSearch";

const Landing: Component = () => {
    return (
        <div class="landing-container">
            <div class="landing-content">
                <NavBar/>
                <h1 style={ { color: 'white' } }>Landing</h1>
                <A style={ { color: 'white' } } href={ '/home' }>To Click This You Need To Be Logged In</A>
                <SeekrSearch/>
            </div>
        </div>
    );
};

export default Landing;