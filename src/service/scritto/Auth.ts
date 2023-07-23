import { AX_SCRITTO } from "./index";
import { LoginRequest, LoginResponse } from "../../model/auth/Login";

const AUTH_PATH = 'auth/';
export const login = async (request: LoginRequest): Promise<LoginResponse> => {
    return AX_SCRITTO.post(`${ AUTH_PATH }login`, request)
        .then(response => response.data)
        .catch(error => {
            // TODO: add generic toast notification for app error handling
            console.log(error);
        });
};