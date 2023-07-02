import { JSX } from "solid-js";
import BasicTextField from "../common/TextField";
import "./index.scss";
import { OAuthIcons } from "../common/OAuthIcons";
import { ArrowInCircle } from "../arrowInCircle/ArrowInCircle";

const Login: () => JSX.Element = () => {
    const handleForgotPasswordClick = () => {
        console.log("Forgot password clicked");
    }

    const handleSignupClick = () => {
        console.log("Signup clicked");
    }

    return (
        <div class="login-container">
            <div class="login-content">
                <h1 class="login-cta">Hello, login<br/>with your email</h1>
                <div class="login-form">
                    <div class="w-10/12 flex-column">
                        <BasicTextField fieldLabel="Email"/>
                        <BasicTextField fieldLabel="Password"/>
                        <div class="w-full flex justify-end mt-4">
                            <p class="text-xs cursor-pointer underline" onClick={ handleForgotPasswordClick }>
                                Forgot Password</p>
                        </div>
                    </div>
                    <div class="my-10">
                        <OAuthIcons/>
                    </div>
                    <div class="flex h-full w-full">
                        <p class="text-xs cursor-pointer text-center mt-auto mr-auto pl-6 pb-5"
                           onclick={ handleSignupClick }>Don't have an<br/>account?</p>
                        <p class="text-sm cursor-pointer underline text-red-800 mt-auto ml-auto pr-6 pb-5"
                           onclick={ handleSignupClick }>Signup</p>
                    </div>
                </div>
                <ArrowInCircle/>
            </div>
        </div>
    );
};

export default Login;