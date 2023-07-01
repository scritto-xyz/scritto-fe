import { Component } from "solid-js";
import BasicTextField from "../common/TextField";
import "./index.scss";
import { OAuthIcons } from "../common/OAuthIcons";
import { ArrowInCircle } from "../common/ArrowInCircle/ArrowInCircle";

const Login: Component = () => {
    return (
        <div class="login-container">
            <div class="login-content">
                <h1 class="login-cta">Hello, login<br/>with your email</h1>
                <div class="login-form">
                    <div class="w-10/12 flex-column">
                        <BasicTextField fieldLabel="Email"/>
                        <BasicTextField fieldLabel="Password"/>
                        <div class="w-full flex justify-end mt-4">
                            <p class="text-xs underline">Forgot Password</p>
                        </div>
                        <p class="text-xs opacity-70 pt-10 text-center">Login with</p>
                    </div>
                    <div class="mt-4">
                        <OAuthIcons/>
                    </div>
                    <div class="flex h-full w-full">
                        <p class="text-xs text-center mt-auto mr-auto pl-6 pb-5">Don't have an<br/>account?</p>
                        <p class="text-sm text-red-800 mt-auto ml-auto pr-6 pb-5 underline">Signup</p>
                    </div>
                </div>
                <ArrowInCircle/>
            </div>
        </div>
    );
};

export default Login;