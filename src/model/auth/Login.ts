import { User } from "../entity/User";

export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse extends User {
    jwt: string;
}