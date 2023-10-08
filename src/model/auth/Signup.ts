import { User } from "../entity/User";

export interface SignupRequest extends Omit<User, 'id' | 'createdAt' | 'updatedAt' | 'lastName' | 'country' | 'state' | 'city'> {
}

export interface SignupResponse extends Omit<User, 'password'> {
}