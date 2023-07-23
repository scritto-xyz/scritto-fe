import { User } from "../entity/User";

export interface SignupRequest extends Omit<User, 'id' | 'createdAt' | 'updatedAt'> {
}

export interface SignupResponse extends Omit<User, 'password'> {
}