import axios from "axios";

export const SCRITTO_BASE_REF = import.meta.env.VITE_SCRITTO_BASE_REF;
export const AX_SCRITTO = axios.create({
    baseURL: SCRITTO_BASE_REF,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    timeout: 5000,
});