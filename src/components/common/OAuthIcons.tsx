import { Component } from "solid-js";
import Google from "../../assets/GoogleWithBackground.png";
import Facebook from "../../assets/FacebookWithBackground.png";
import Twitter from "../../assets/TwitterWithBackground.png";

export const OAuthIcons: Component = () => {
    return (
        <div>
            <p class="text-xs opacity-70 mb-2 text-center">Login with</p>
            <div class="flex gap-4">
                <img alt="Google login" src={ Google }/>
                <img alt="Facebook login" src={ Facebook }/>
                <img alt="Twitter login" src={ Twitter }/>
            </div>
        </div>
    );
}