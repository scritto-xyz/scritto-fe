import {User} from "../entity/User";

export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    jwt: string;
    user: User;
}