export interface UserType {
    CLIENT,
    ARTIST,
}

export interface User {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    country: string;
    state: string;
    city: string;
    user_type: UserType;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}