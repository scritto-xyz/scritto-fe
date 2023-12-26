import {User} from "../../model/entity/User";
import {AX_SCRITTO} from "./index";
import {useAuthenticatedHeaders} from "../../context/AuthContext";

const USERS_PATH = 'users';

export const getArtists = async (): Promise<User[]> => {
    const headers = useAuthenticatedHeaders();
    return AX_SCRITTO.get(`${USERS_PATH}/artists`, headers)
        .then(response => {
            if (!response?.data) {
                throw new Error('No artists response received');
            }
            return response.data;
        })
        .catch(error => {
            throw error;
        });
}