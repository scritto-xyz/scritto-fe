import { AX_SCRITTO } from "./index";
import { LoginRequest, LoginResponse } from "../../model/auth/Login";
import { toast } from "solid-toast";

const AUTH_PATH = 'auth/';
export const login = async (request: LoginRequest): Promise<LoginResponse> => {
    return AX_SCRITTO.post(`${ AUTH_PATH }login`, request)
        .then(response => response.data)
        .catch(error => {
            toast.error('An error occurred');
            console.log(error);
        });
};