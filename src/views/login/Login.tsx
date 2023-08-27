import { createEffect, createSignal, JSX, Show } from "solid-js";
import BasicTextField from "../../components/common/TextField";
import "./index.scss";
import { OAuthIcons } from "../../components/common/OAuthIcons";
import { ArrowInCircle } from "../../components/arrowInCircle/ArrowInCircle";
import { useNavigate } from "@solidjs/router";
import { LoginRequest, LoginResponse } from "../../model/auth/Login";
import { login } from "../../service/scritto/Auth";
import { useAuth } from "../../context/AuthContext";
import { validateForm } from "../../form/FormValidation";
import { CircularProgress } from "@suid/material";
import { toast } from "solid-toast";
import ScrittoForm from "../../components/common/form/ScrittoForm";
import { FormFieldEntries } from "../../form/interface/FormFieldEntries";
import { FormField, ValidationType } from "../../form/interface/FormField";


const Login: () => JSX.Element = () => {
    const [loginRequest, setLoginRequest] = createSignal<LoginRequest>(undefined);
    const [formFields, setFormFields] = createSignal<FormFieldEntries>({
        'email': {
            name: 'email',
            label: 'Email',
            required: true,
            setter: setLoginRequest,
            validation: {
                validationType: ValidationType.EMAIL,
            },
        } as FormField,
        'password': {
            name: 'password',
            label: 'Password',
            type: 'password',
            required: true,
            setter: setLoginRequest
        } as FormField,
    });
    const [isDesktopView, setIsDesktopView] = createSignal<boolean>(null);
    const [isLoading, setIsLoading] = createSignal<boolean>(false);
    const navigate = useNavigate();
    const auth = useAuth();

    const handleForgotPasswordClick = () => {
        console.log("Forgot password clicked");
    };

    const handleSignupClick = () => {
        navigate("/signup");
    };

    const handleLogin = async () => {
        setIsLoading(true);
        const { adjustedEntries, isError } = validateForm(loginRequest(), formFields());
        setFormFields(adjustedEntries);
        if (isError) {
            toast.error('Please fill all the required fields correctly');
            setIsLoading(false);
            return;
        }

        const response: LoginResponse = await login(loginRequest());
        setIsLoading(false);
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

    createEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsDesktopView(true);
            } else {
                setIsDesktopView(false);
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    });


    return (
        <div class="login-container">
            <div class="login-content">
                <div class="login-cta">
                    <h1>Hello, login<br/>with your email</h1>
                    <Show when={ isLoading() }>
                        <CircularProgress/>
                    </Show>
                </div>
                <ScrittoForm>
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
                    <div class="flex h-full w-full items-center sign-up-cta-buttons">
                        <p class="text-xs cursor-pointer text-center mt-auto mr-auto pl-6 pb-5"
                           onclick={ handleSignupClick }>Don't have an<br/>account?</p>
                        <p class="text-sm cursor-pointer underline text-red-800 mt-auto ml-auto pr-6 pb-5"
                           onclick={ handleSignupClick }>Signup</p>
                        <Show when={ isDesktopView() }>
                            <div class="ml-auto">
                                <ArrowInCircle onClick={ handleLogin } margin="-3rem 0 0 0"/>
                            </div>
                        </Show>
                    </div>
                </ScrittoForm>
                <Show when={ !isDesktopView() }>
                    <ArrowInCircle onClick={ handleLogin } margin="-3rem 0 0 0"/>
                </Show>
            </div>
        </div>
    );
};

export default Login;