import './index.scss';
import ScrittoForm from "../../components/common/form/ScrittoForm";
import { createEffect, createSignal } from "solid-js";
import { validateForm } from "../../form/validation/FormValidation";
import { SignupResponse } from "../../model/auth/Signup";
import { OAuthIcons } from "../../components/common/OAuthIcons";
import { ArrowInCircle } from "../../components/arrowInCircle/ArrowInCircle";
import { toast } from "solid-toast";
import { signUp } from "../../service/scritto/Auth";
import { useNavigate } from "@solidjs/router";
import { FormFieldEntries } from "../../form/interface/FormFieldEntries";
import { TextFieldGroup } from "../../components/common/TextFieldGroup";
import { SIGNUP_FORM } from "../../form/staticForms/Signup";

const Signup = () => {
    const [isLoading, setIsLoading] = createSignal<boolean>(false);
    const [formFields, setFormFields] = createSignal<FormFieldEntries>(SIGNUP_FORM);
    const [isDesktopView, setIsDesktopView] = createSignal<boolean>(null);
    const navigate = useNavigate();

    const handleSignup = async () => {
        if (isLoading()) return;

        setIsLoading(true);
        try {
            const { validatedEntries, isError } = validateForm(formFields());
            if (isError) {
                setFormFields(validatedEntries);
                toast.error('Please fill all the required fields correctly');
                return;
            }
            setFormFields(validatedEntries);

            const response: SignupResponse = await signUp(formFields());
            navigate('/home', { replace: true, state: { user: response } });
        } catch (exception: any) {
            console.log(exception);
            toast.error('Something went wrong, please try again later');
        } finally {
            setIsLoading(false);
        }
    };

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
        <div class="signup-container">
            <div class="signup-content">
                <h1 class="text-3xl text-center">set up<br/>your account :)</h1>
                <ScrittoForm onSubmit={ handleSignup }>
                    <div class="text-field-group-container w-10/12 flex-column">

                        <TextFieldGroup setter={ setFormFields } formFieldEntries={ formFields }/>
                    </div>
                    <div class="mt-8">
                        <OAuthIcons/>
                    </div>
                    <ArrowInCircle onClick={ handleSignup }
                                   margin={ isDesktopView() ? '2rem 0 0 0' : '2rem 0 -3.75rem 0' }/>
                </ScrittoForm>
            </div>
        </div>
    );
};


export default Signup;