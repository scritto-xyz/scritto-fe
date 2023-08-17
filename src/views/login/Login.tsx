import { createEffect, createSignal, JSX } from "solid-js";
import BasicTextField from "../../components/common/TextField";
import "./index.scss";
import { OAuthIcons } from "../../components/common/OAuthIcons";
import { ArrowInCircle } from "../../components/arrowInCircle/ArrowInCircle";
import { useNavigate } from "@solidjs/router";
import { LoginRequest, LoginResponse } from "../../model/auth/Login";
import { login } from "../../service/scritto/Auth";
import { useAuth } from "../../context/AuthContext";
import { FormField, FormFieldEntries, validateForm } from "../../util/FormValidation";


const Login: () => JSX.Element = () => {
    const [loginRequest, setLoginRequest] = createSignal<LoginRequest>(undefined);
    const [formFields, setFormFields] = createSignal<FormFieldEntries>({
        'email': {
            name: 'email',
            label: 'Email',
            required: true,
            setter: setLoginRequest
        } as FormField,
        'password': {
            name: 'password',
            label: 'Password',
            type: 'password',
            required: true,
            setter: setLoginRequest
        } as FormField,
    });

    const navigate = useNavigate();
    const auth = useAuth();

    const handleForgotPasswordClick = () => {
        console.log("Forgot password clicked");
    };

    const handleSignupClick = () => {
        console.log("Signup clicked");
    };

    const handleLogin = async () => {
        const { adjustedEntries, isError } = validateForm(loginRequest(), formFields());
        if (isError) {
            setFormFields(adjustedEntries);
            return;
        }

        const response: LoginResponse = await login(loginRequest());
        if (!response) {
            return;
        }

        localStorage.setItem("scritto-jwt", response.jwt);
        navigate("/home");
    };

    createEffect(() => {
        if (auth) {
            navigate("/home");
        }
    });


    return (
        <div class="login-container">
            <div class="login-content">
                <h1 class="login-cta">Hello, login<br/>with your email</h1>
                <div class="login-form">
                    <div class="w-10/12 flex-column">
                        <BasicTextField formFieldEntries={ formFields } fieldName="email"/>
                        <BasicTextField formFieldEntries={ formFields } fieldName="password"/>
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