import { createResource, createSignal, JSX } from "solid-js";
import BasicTextField from "../../components/common/TextField";
import "./index.scss";
import { OAuthIcons } from "../../components/common/OAuthIcons";
import { ArrowInCircle } from "../../components/arrowInCircle/ArrowInCircle";
import { useNavigate } from "@solidjs/router";
import { echo } from "../../service/scritto/Echo";
import { LoginRequest, LoginResponse } from "../../model/auth/Login";
import { login } from "../../service/scritto/Auth";

const Login: () => JSX.Element = () => {
    const [data, { mutate, refetch }] = createResource(echo);
    const [loginRequest, setLoginRequest] = createSignal<LoginRequest>(undefined);

    const navigate = useNavigate();
    const handleForgotPasswordClick = () => {
        console.log("Forgot password clicked");
    };

    const handleSignupClick = () => {
        console.log("Signup clicked");
    };

    const handleLogin = async () => {
        const response: LoginResponse = await login(loginRequest());
        localStorage.setItem("scritto-jwt", response.jwt);
        navigate("/home");
    };

    return (
        <div class="login-container">
            <div class="login-content">
                <h1 class="login-cta">Hello, login<br/>with your email</h1>
                <div class="login-form">
                    <div class="w-10/12 flex-column">
                        <BasicTextField setter={ setLoginRequest } name="email" fieldLabel="Email"/>
                        <BasicTextField setter={ setLoginRequest } name="password" type="password"
                                        fieldLabel="Password"/>
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
                <ArrowInCircle onClick={ handleLogin }/>
            </div>
        </div>
    );
};

export default Login;