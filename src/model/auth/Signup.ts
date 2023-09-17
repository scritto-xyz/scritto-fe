import {User} from "../entity/User";

export interface SignupRequest extends Omit<User, 'id' | 'createdAt' | 'updatedAt' | 'last_name' | 'country' | 'state' | 'city'> {
}

export interface SignupResponse extends Omit<User, 'password'> {
}