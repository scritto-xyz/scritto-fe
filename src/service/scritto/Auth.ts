import { AX_SCRITTO } from "./index";
import { LoginRequest, LoginResponse } from "../../model/auth/Login";
import { SignupRequest, SignupResponse } from "../../model/auth/Signup";
import { FormFieldEntries } from "../../form/interface/FormFieldEntries";
import { mapFormFieldsToModel } from "../util";

const AUTH_PATH = 'auth/';
export const login = async (request: FormFieldEntries): Promise<LoginResponse> => {
    const mappedRequest: LoginRequest = mapFormFieldsToModel<LoginRequest>(request);
    return AX_SCRITTO.post(`${ AUTH_PATH }login`, mappedRequest)
        .then(response => {
            if (!response?.data) {
                throw new Error('No login response received');
            }
            return response.data;
        })
        .catch(error => {
            throw error;
        });
};

export const signUp = async (request: FormFieldEntries): Promise<SignupResponse> => {
    const mappedRequest: LoginRequest = mapFormFieldsToModel<SignupRequest>(request);
    console.log('mappedRequest', mappedRequest);
    return AX_SCRITTO.post(`${ AUTH_PATH }register`, mappedRequest)
        .then(response => {
            if (!response?.data) {
                throw new Error('No signup response received');
            }
            return response.data;
        })
        .catch(error => {
            throw error;
        });
};