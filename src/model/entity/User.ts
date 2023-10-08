export interface UserType {
    CLIENT,
    ARTIST,
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    country: string;
    state: string;
    city: string;
    userType: UserType;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}