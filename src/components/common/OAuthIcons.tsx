import { Component } from "solid-js";
import Google from "../../../public/assets/GoogleWithBackground.png";
import Facebook from "../../../public/assets/FacebookWithBackground.png";
import Twitter from "../../../public/assets/TwitterWithBackground.png";

export const OAuthIcons: Component = () => {
    return (
        <div class="flex gap-4">
            <img alt="Google login" src={ Google }/>
            <img alt="Facebook login" src={ Facebook }/>
            <img alt="Twitter login" src={ Twitter }/>
        </div>
    );
}